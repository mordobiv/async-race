import { startStopCar } from "../../../data-controller/engine";
import getDriveStep from "../../../animation/drive";
import { getWinner, createWinner, updateWinner } from "../../../data-controller/records";
import { checkEngine } from "../../../data-controller/engine";
import { getCar } from "../../../data-controller/cars";

async function sentDriveRequests(carId: number) {
  return startStopCar(carId, 'started');
}

export async function driveCar(carBlock: HTMLDivElement) {
  const start = carBlock.querySelector('.button__start') as HTMLButtonElement;
  start.classList.add('button__disabled');
  start.disabled = true;
  const carId = +(carBlock.dataset.carId || 1);
  return await sentDriveRequests(carId);
  // const velocity = await startStopCar(carId, 'started');

  // const driveAnimationStep = getDriveStep(velocity);

  // const carIconBlock = carBlock.querySelector('.car') as HTMLDivElement;

  // const stop = carBlock.querySelector('.button__stop') as HTMLButtonElement;
  
  // const startRace = new Date().valueOf();
  // stop.disabled = false;

  // const carAnimationIntervalId = window.setInterval(async () => {
  //   if (carIconBlock) {
  //     if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
  //       clearInterval(carAnimationIntervalId);
  //       const endRace = new Date().valueOf();
  //       const raceDuration = ((endRace - startRace) / 1000).toFixed(2);

  //       if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
  //         sessionStorage.setItem('race', 'false');

  //         const car = await getCar(carId);
  //         alert(`${car.name} has won!\nTime: ${raceDuration}s`);
  //         const carWin = await getWinner(carId);
  //         if (carWin === 404) {
  //           createWinner(carId, +raceDuration);
  //           const recordsAmount = document.querySelector('.records__amount');
  //           if (recordsAmount && recordsAmount.textContent) {
  //             recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
  //           }
  //         } else {
  //           const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
  //           updateWinner(carId, carWin.wins + 1, +newTime);
  //         }
  //       }
  //       return;
  //     }

  //     const currentTranslateValue = carIconBlock.style.translate;
  //     const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
  //     carIconBlock.style.translate = newTranslateValue;
  //   }
  // }, driveAnimationStep.stepDistance);
  // carBlock.dataset[`intervalId`] = `${carAnimationIntervalId}`;
  // const isEngineOk = await checkEngine(carId);
  // if (!isEngineOk) clearInterval(carAnimationIntervalId);
  // return Promise;
};

export async function startSingleCar(carBlock: HTMLDivElement) {
  const start = carBlock.querySelector('.button__start') as HTMLButtonElement;
  start.classList.add('button__disabled');
  start.disabled = true;
  const carId = +(carBlock.dataset.carId || 1);

  const velocity = await sentDriveRequests(carId);

  const driveAnimationStep = getDriveStep(velocity);

  const carIconBlock = carBlock.querySelector('.car') as HTMLDivElement;

  const stop = carBlock.querySelector('.button__stop') as HTMLButtonElement;
  
  const startRace = new Date().valueOf();
  stop.disabled = false;

  const carAnimationIntervalId = window.setInterval(async () => {
    if (carIconBlock) {
      if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
        clearInterval(carAnimationIntervalId);
        const endRace = new Date().valueOf();
        const raceDuration = ((endRace - startRace) / 1000).toFixed(2);

        if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
          sessionStorage.setItem('race', 'false');

          const car = await getCar(carId);
          alert(`${car.name} has won!\nTime: ${raceDuration}s`);
          const carWin = await getWinner(carId);
          if (carWin === 404) {
            createWinner(carId, +raceDuration);
            const recordsAmount = document.querySelector('.records__amount');
            if (recordsAmount && recordsAmount.textContent) {
              recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
            }
          } else {
            const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
            updateWinner(carId, carWin.wins + 1, +newTime);
          }
        }
        return;
      }

      const currentTranslateValue = carIconBlock.style.translate;
      const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
      carIconBlock.style.translate = newTranslateValue;
    }
  }, driveAnimationStep.stepDistance);
  carBlock.dataset[`intervalId`] = `${carAnimationIntervalId}`;
  const isEngineOk = await checkEngine(carId);
  if (!isEngineOk) clearInterval(carAnimationIntervalId);
  return Promise;
}

export async function startRace() {

  const raceButton = document.querySelector('.button__race') as HTMLButtonElement;
  raceButton.disabled = true;
  const carBlocks = document.querySelectorAll('.car-block');

  const speeds = [];
  const speedsPromises = [];
  carBlocks.forEach(async (carBlock) => {
    const carId = +((carBlock as HTMLDivElement).dataset.carId || 1);
    const velocity = sentDriveRequests(carId);

    speedsPromises.push(velocity);
    speeds.push({
      carId,
      velocity,
    });
  });

  await Promise.all(speedsPromises);

    carBlocks.forEach(async (carBlock) => {
    let velocity = 1;
    const carId = +((carBlock as HTMLDivElement).dataset.carId || 1);
    for (let i = 0; i < speeds.length; i++) {
      if (carId === speeds[i].carId) {
        velocity = await speeds[i].velocity;
        break;
      }
    }
    const driveAnimationStep = getDriveStep(velocity);

    const carIconBlock = carBlock.querySelector('.car') as HTMLDivElement;
    
    const stop = carBlock.querySelector('.button__stop') as HTMLButtonElement;
    stop.disabled = false;

    const startRaceDate = new Date().valueOf();

    const carAnimationIntervalId = window.setInterval(async () => {
      if (carIconBlock) {
        if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
          clearInterval(carAnimationIntervalId);
          const endRace = new Date().valueOf();
          const raceDuration = ((endRace - startRaceDate) / 1000).toFixed(2);

          if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
            sessionStorage.setItem('race', 'false');

            const resetButton = document.querySelector('.button__reset') as HTMLButtonElement;
            resetButton.disabled = false;

            const car = await getCar(carId);
            alert(`${car.name} has won!\nTime: ${raceDuration}s`);
            const carWin = await getWinner(carId);
            if (carWin === 404) {
              createWinner(carId, +raceDuration);
              const recordsAmount = document.querySelector('.records__amount');
              if (recordsAmount && recordsAmount.textContent) {
                recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
              }
            } else {
              const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
              updateWinner(carId, carWin.wins + 1, +newTime);
            }
          }
          return;
        }

        const currentTranslateValue = carIconBlock.style.translate;
        const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
        carIconBlock.style.translate = newTranslateValue;
      }
    }, driveAnimationStep.stepDistance);
    (carBlock as HTMLDivElement).dataset[`intervalId`] = `${carAnimationIntervalId}`;
    const isEngineOk = await checkEngine(carId);
    if (!isEngineOk) clearInterval(carAnimationIntervalId);
    return Promise;
  }
}
