import { createNode, createButton, createImg } from '../../../helpers';
import { getAllCars, removeCar } from '../../../data-controller/cars';
import { startCar, checkEngine } from '../../../data-controller/engine';
import getDriveStep from '../../../animation/drive';
import { ICar } from '../../../interfaces/car';

async function renderHeader() {
  const garageCarsHeader = createNode('header');
  const garageCarsHeaderLabel = createNode('header__label', 'Garage');
  const carsAmount = await getAllCars();
  const garageCarsHeaderValue = createNode('header__value', carsAmount.length);

  garageCarsHeader.append(garageCarsHeaderLabel, garageCarsHeaderValue);
  return garageCarsHeader;
}

function renderCurrentPage() {
  const pageNumber = createNode('page-number');
  const pageNumberLabel = createNode('page-number__label', 'Page #');
  const pageNumberValue = createNode('page-number__value', '1');
  pageNumber.append(pageNumberLabel, pageNumberValue);
  return pageNumber;
}

function renderSpecificCar(car: ICar) {
  const carBlock = createNode('car-block');

  const carModifiers = createNode('modifier');
  const selectButton = createButton('select');
  selectButton.addEventListener('click', () => {
    const editInput = document.querySelector('.edit__input') as HTMLInputElement;
    editInput.value = car.name;
    editInput.dataset.carId = `${car.id}`;
  });
  const removeButton = createButton('remove');
  removeButton.addEventListener('click', () => {
    removeCar(car.id);
    carBlock.remove();
  });
  carModifiers.append(selectButton, removeButton);

  const carName = createNode('name', car.name);
  const carIconBlock = createImg('/src/assets/icon/carIcon.svg', 'car');
  const flagIconBlock = createImg('/src/assets/icon/flag.svg', 'flag');
  const controls = createNode('controls');
  const start = createButton('start');
  start.dataset.carId = `${car.id}`;
  start.addEventListener('click', async () => {
    const velocity = await startCar(car.id);
    const maxAnimationTime = 10;
    const driveAnimationStep = getDriveStep(velocity);
    // const isEngineOk = checkEngine(car.id);
    const carAnimationIntervalId = setInterval(() => {
      // if (!isEngineOk) clearInterval(carAnimationIntervalId);
      const currentTranslateValue = carIconBlock.style.translate;
      const newTranslateValue = currentTranslateValue ? `${+currentTranslateValue.slice(0, -1) + driveAnimationStep}%` : `${driveAnimationStep}%`;
      carIconBlock.style.translate = newTranslateValue;
      if (+carIconBlock.style.translate.slice(0, -1) > 100) clearInterval(carAnimationIntervalId);
    }, maxAnimationTime / driveAnimationStep);
  });
  const stop = createButton('stop');
  controls.append(start, stop);

  const race = createNode('race');
  race.append(carIconBlock, flagIconBlock);

  carBlock.append(carModifiers, carName, controls, race);
  return carBlock;
}

async function renderCars() {
  const cars = createNode('cars');
  const allCars = await getAllCars();
  allCars.forEach((car: ICar) => {
    cars.append(renderSpecificCar(car));
  });
  return cars;
}

async function renderGarageCars() {
  const garageCars = createNode('garage-cars');
  const header = await renderHeader();
  const currentPage = renderCurrentPage();
  const cars = await renderCars();

  garageCars.append(header, currentPage, cars);
  return garageCars;
}

export default renderGarageCars;
