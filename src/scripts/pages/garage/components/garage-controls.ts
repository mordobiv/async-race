import { createNode, createButton } from '../../../helpers';
import { brands, models } from '../../../data-controller/cars-name';
import { createCar } from '../../../data-controller/cars';
import renderGarageCars, { renderSpecificCar } from './garage-cars';
import { carsToGenerate } from '../../../config';
import { startRace } from './drive-car';

function renderGarageControls() {
  const garageControls = createNode('controls');

  const raceButton = createButton('race');
  raceButton.addEventListener('click', () => {
    sessionStorage.setItem('race', 'true');
    const stopButtons = document.querySelectorAll('.button__stop');
    stopButtons.forEach((button) => (button as HTMLButtonElement).click())
    startRace();
  });
  const resetButton = createButton('reset');
  resetButton.disabled = true;
  resetButton.addEventListener('click', () => {
    document.querySelectorAll('.button__stop').forEach((el) => (el as HTMLButtonElement).click())
    raceButton.disabled = false;
  });
  const generateButton = createButton('generate');
  generateButton.addEventListener('click', async () => {
    const nextButton = document.querySelector('.next__garage') as HTMLButtonElement;
    nextButton.disabled = false;
    const results = [];
    for (let i = 0; i < carsToGenerate; i += 1) {
      const randBrand = brands[Math.floor(Math.random() * brands.length)];
      const randModel = models[Math.floor(Math.random() * models.length)];
      const carName = `${randBrand} ${randModel}`;
      const car = {
        name: carName,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };
      results.push(createCar(car));
    }
    const garageCars = await renderGarageCars();
    const garageView = document.querySelector('.garage');
    garageView?.append(garageCars);

    const carsHeaderAmountBlock = document.querySelector('.header__value');
    if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
      carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent + carsToGenerate}`;
    }
  });

  garageControls.append(raceButton, resetButton, generateButton);
  return garageControls;
}

export default renderGarageControls;
