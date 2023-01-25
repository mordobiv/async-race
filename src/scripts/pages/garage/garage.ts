import renderCarManagement from './components/car-management';
import renderGarageControls from './components/garage-controls';
import renderGarageCars from './components/garage-cars';
import { renderGaragePagination } from './components/pagination';
import { createNode } from '../../helpers';

async function renderGaragePage() {
  sessionStorage.setItem('race', 'false');
  sessionStorage.setItem('garagePage', 1);
  const body = document.querySelector('body');
  const garageView = createNode('garage');
  if (body) {
    const carManagement = renderCarManagement();
    const garageControls = renderGarageControls();
    const pagination = await renderGaragePagination();
    const garageCars = await renderGarageCars();

    garageView.append(carManagement, garageControls, pagination, garageCars);
    body.append(garageView);
  }
}

export default renderGaragePage;
