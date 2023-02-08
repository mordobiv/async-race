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
import { driveCar, startRace, startSingleCar } from './drive-car';

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

  start.addEventListener('click', async () => {
    startSingleCar(carBlock);
  });

  stop.addEventListener('click', async () => {
    stop.disabled = true;
    start.disabled = false;
    await startStopCar(car.id, 'stopped');
    carIconBlock.style.translate = '';
    const carIntervalId = carBlock.dataset['intervalId'];
    console.log(carIntervalId);
    clearInterval(carIntervalId);
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
