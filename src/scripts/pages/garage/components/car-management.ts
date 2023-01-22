import { createNode, createButton } from '../../../helpers';
import { createCar, updateCar } from '../../../data-controller/cars';

function renderCarSelection(blockType: string) {
  const main = createNode(blockType);

  const setName = document.createElement('input') as HTMLInputElement;
  setName.className = `${blockType}__input`;

  const color = createNode(`${blockType}__color`);

  const button = createButton(blockType);
  button.addEventListener('click', () => {
    if (blockType === 'create') {
      const car = {
        name: setName.value,
        color: 'aaaaaa',
      };
      createCar(car);
    } else {
      const { carId } = setName.dataset;
      if (carId) {
        const { value } = setName;
        updateCar(+carId, value, 'brown');
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
