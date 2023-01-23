import { createNode, createButton } from '../../../helpers';
import { brands, models } from '../../../data-controller/cars-name';
import { createCar } from '../../../data-controller/cars';

function renderGarageControls() {
  const garageControls = createNode('controls');

  const raceButton = createButton('race');
  const resetButton = createButton('reset');
  const generateButton = createButton('genarate');
  generateButton.addEventListener('click', () => {
    const carsToGenerate = 10;
    for (let i = 0; i < carsToGenerate; i += 1) {
      const randBrand = brands[Math.floor(Math.random() * brands.length)];
      const randModel = models[Math.floor(Math.random() * models.length)];
      const carName = `${randBrand} ${randModel}`;
      const car = {
        name: carName,
        color: 'blue',
      };
      createCar(car);
    }
  });

  garageControls.append(raceButton, resetButton, generateButton);
  return garageControls;
}

export default renderGarageControls;
