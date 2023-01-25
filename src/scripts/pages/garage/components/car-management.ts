import { createNode, createButton } from '../../../helpers';
import { createCar, updateCar } from '../../../data-controller/cars';
import renderGarageCars, { renderSpecificCar } from './garage-cars';
import renderGaragePagination from './pagination';

function renderCarSelection(blockType: string) {
  const main = createNode(blockType);

  const setName = document.createElement('input') as HTMLInputElement;
  setName.className = `${blockType}__input`;

  const color = createNode(`${blockType}__color`, 'Set color: ');
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.className = 'color__picker';

  color.append(colorPicker);
  const button = createButton(blockType);
  button.addEventListener('click', async () => {
    if (blockType === 'create') {
      const car = {
        name: setName.value,
        color: colorPicker.value,
      };
      const newCar = await createCar(car);
      const carsHeaderAmountBlock = document.querySelector('.header__value');
      if (carsHeaderAmountBlock && carsHeaderAmountBlock.textContent) {
        carsHeaderAmountBlock.textContent = `${+carsHeaderAmountBlock.textContent + 1}`;
      }
      const garageCars = await renderGarageCars();
      const garageView = document.querySelector('.garage');
      garageView?.append(garageCars);
    } else {
      const { carId } = setName.dataset;
      if (carId) {
        const { value } = setName;
        updateCar(+carId, value, colorPicker.value);
        const garageCars = await renderGarageCars();
        const garageView = document.querySelector('.garage');
        garageView?.append(garageCars);
      }
    }
  });

  main.append(setName, color, button);
  return main;
}

function renderCarManagement() {
  const carManagementBlock = createNode('car-management');
  const createCarBlock = renderCarSelection('create');
  const editCarBlock = renderCarSelection('edit');

  carManagementBlock.append(createCarBlock, editCarBlock);
  return carManagementBlock;
}

export default renderCarManagement;
