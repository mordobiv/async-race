import { createNode, createButton, createImg, renderColorSvg, getCurrentGaragePage, setCurrentGaragePage } from '../../../helpers';
import { getAllCars, removeCar } from '../../../data-controller/cars';
import { startStopCar, checkEngine } from '../../../data-controller/engine';
import {
  createWinner, deleteWinner, getWinner, updateWinner,
} from '../../../data-controller/records';
import getDriveStep from '../../../animation/drive';
import ICar from '../../../interfaces/car';
import { carsPerGaragePage } from '../../../config';
import updateGaragePage from '../modules/update-dynamic-content/update-garage-dynamic-content';

export function renderSpecificCar(car: ICar) {
  const carBlock = createNode('car-block');
  carBlock.dataset.carId = `${car.id}`;

  const carModifiers = createNode('modifier');

  const selectButton = createButton('select');
  selectButton.addEventListener('click', () => {
    const editInput = document.querySelector('.edit__input') as HTMLInputElement;
    editInput.value = car.name;
    editInput.dataset.carId = `${car.id}`;
  });

  const removeButton = createButton('remove');
  const removeOptions = {
    updateHeader: true,
    updatePagination: true,
    updatePageNumber: true,
  }
  removeButton.addEventListener('click', async () => {
    removeCar(car.id);
    carBlock.remove();
    const carsHeaderAmountBlock = document.querySelector('.header__value');
    if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
      carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent - 1}`;
    }
    await deleteWinner(car.id);

    const carsBlock = document.querySelector('.cars');
    const currentGaragePage = getCurrentGaragePage();
    if (carsBlock?.childElementCount === 0 && currentGaragePage !== '1') setCurrentGaragePage(+currentGaragePage - 1);
    updateGaragePage(removeOptions);
  });

  carModifiers.append(selectButton, removeButton);

  const carName = createNode('name', car.name);
  const carIconBlock = document.createElement('div');
  carIconBlock.innerHTML = renderColorSvg(car.color);
  carIconBlock.className = 'car';

  const flagIconBlock = createImg('assets/icon/flag.svg', 'flag');
  const controls = createNode('controls');
  const start = createButton('start');
  const stop = createButton('stop');
  start.disabled = false;
  stop.disabled = true;
  start.dataset.carId = `${car.id}`;
  let carAnimationIntervalId = 0;
  start.addEventListener('click', async () => {
    start.classList.add('button__disabled');
    start.disabled = true;
    const startRace = new Date().valueOf();
    const velocity = await startStopCar(car.id, 'started');
    const driveAnimationStep = getDriveStep(velocity);
    stop.disabled = false;

    carAnimationIntervalId = window.setInterval(async () => {
      if (carIconBlock) {
        if (+carIconBlock.style.translate.slice(0, -1) >= 100) {
          clearInterval(carAnimationIntervalId);
          const endRace = new Date().valueOf();
          const raceDuration = ((endRace - startRace) / 1000).toFixed(2);
          if (sessionStorage.getItem('race') && sessionStorage.getItem('race') === 'true') {
            sessionStorage.setItem('race', 'false');
            alert(`${car.name} has won!\nTime: ${raceDuration}s`);
            const carWin = await getWinner(car.id);
            if (carWin === 404) {
              createWinner(car.id, +raceDuration);
              const recordsAmount = document.querySelector('.records__amount');
              if (recordsAmount && recordsAmount.textContent) {
                recordsAmount.textContent = `${+recordsAmount.textContent + 1}`;
              }
            } else {
              const newTime = +raceDuration < carWin.time ? +raceDuration : carWin.time;
              updateWinner(car.id, carWin.wins + 1, +newTime);
            }
          }
          return;
        }
        const currentTranslateValue = carIconBlock.style.translate;
        const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep.stepDistance}%` : `${driveAnimationStep.stepDistance}%`;
        carIconBlock.style.translate = newTranslateValue;
      }
    }, driveAnimationStep.stepDistance);
    carBlock.dataset.intervalId = `${carAnimationIntervalId}`;
    const isEngineOk = await checkEngine(car.id);
    if (!isEngineOk) clearInterval(carAnimationIntervalId);
  });
  stop.addEventListener('click', () => {
    stop.disabled = true;
    start.disabled = false;
    startStopCar(car.id, 'stopped');
    carIconBlock.style.translate = '';
    clearInterval(carAnimationIntervalId);
  });
  controls.append(start, stop);

  const race = createNode('race');
  race.append(carIconBlock, flagIconBlock);

  carBlock.append(carModifiers, carName, controls, race);
  return carBlock;
}

async function renderCars() {
  document.querySelector('.cars')?.remove();
  const cars = createNode('cars');
  const garagePage = sessionStorage.getItem('garagePage');
  let allCars = [];
  if (garagePage) {
    for (let i = 0; i < carsPerGaragePage; i += 1) {
      allCars = await getAllCars({ _limit: carsPerGaragePage, _page: (sessionStorage.getItem('garagePage') || '1') });
    }
  }
  allCars.forEach((car: ICar) => {
    cars.append(renderSpecificCar(car));
  });
  return cars;
}

export default renderCars;
