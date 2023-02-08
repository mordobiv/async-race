import { createNode, createButton } from '../../../helpers';
import { createCar, updateCar } from '../../../data-controller/cars';
import updateGaragePage from '../modules/update-dynamic-content/update-garage-dynamic-content';

function renderCarSelection(blockType: string) {
  const main = createNode(blockType);

  const blockLabel = createNode('header__label', `${blockType}`);
  const setName = document.createElement('input') as HTMLInputElement;
  setName.className = `${blockType}__input`;

  const color = createNode(`${blockType}__color color-block`);
  const colorPickerLabel = createNode(`${blockType}__color__label`, 'Set color: ');
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.className = 'color__picker';
  color.append(colorPickerLabel, colorPicker);

  const button = createButton(blockType);
  button.addEventListener('click', async () => {
    if (blockType === 'create') {
      const car = {
        name: setName.value,
        color: colorPicker.value,
      };
      await createCar(car);
      const updatePageOptions = {
        updateHeader: true,
        updatePagination: true,
        updatePageNumber: true,
      }
      updateGaragePage(updatePageOptions);
    } else {
      const { carId } = setName.dataset;
      if (carId) {
        const { value } = setName;
        updateCar(+carId, value, colorPicker.value);
        updateGaragePage({});
      }
    }
  });

  main.append(blockLabel, setName, color, button);
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
