import renderCarManagement from './components/car-management';
import renderGarageControls from './components/garage-controls';
import renderGarageCars from './components/garage-cars';
import { createNode } from '../../helpers';

async function renderGaragePage() {
  const body = document.querySelector('body');
  const garageView = createNode('garage');
  if (body) {
    const carManagement = renderCarManagement();
    const garageControls = renderGarageControls();
    const garageCars = await renderGarageCars();

    garageView.append(carManagement, garageControls, garageCars);
    body.append(garageView);
  }
}

export default renderGaragePage;
