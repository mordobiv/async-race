import { carsPerGaragePage } from '../../../config';
import { getAllCars } from '../../../data-controller/cars';
import { createButton, createNode } from '../../../helpers';
import renderGarageCars from './garage-cars';

export async function renderGaragePagination() {
  const paginationBlock = createNode('pagination');
  let currentPage = sessionStorage.getItem('garagePage');
  const previous = createButton('Prev');
  if (currentPage && currentPage === '1') previous.disabled = true;

  const next = createButton('Next');
  previous.classList.add('prev__garage');
  next.classList.add('next__garage');
  let carsAmount = (await getAllCars()).length;
  if (carsAmount && currentPage) {
    if (+carsAmount < carsPerGaragePage * +currentPage) next.disabled = true;
  }

  next.addEventListener('click', async () => {
    const resetButton = document.querySelector('.button__reset') as HTMLButtonElement;
    if (resetButton) resetButton.click();
    carsAmount = (await getAllCars()).length;

    currentPage = sessionStorage.getItem('garagePage');
    sessionStorage.setItem('garagePage', (+currentPage) + 1);
    currentPage = sessionStorage.getItem('garagePage');

    if (carsAmount && currentPage) {
      if (+carsAmount <= carsPerGaragePage * +currentPage) next.disabled = true;
    }

    const garageCars = await renderGarageCars();
    const garageView = document.querySelector('.garage');
    garageView?.append(garageCars);

    previous.disabled = false;
  });

  previous.addEventListener('click', async () => {
    next.disabled = false;
    currentPage = sessionStorage.getItem('garagePage');
    sessionStorage.setItem('garagePage', (+currentPage) - 1);
    currentPage = sessionStorage.getItem('garagePage');
    if (currentPage && currentPage === '1') previous.disabled = true;

    const garageCars = await renderGarageCars();
    const garageView = document.querySelector('.garage');
    garageView?.append(garageCars);

    const resetButton = document.querySelector('.button__reset') as HTMLButtonElement;
    if (resetButton) resetButton.click();
  });

  paginationBlock.append(previous, next);
  return paginationBlock;
}

export default renderGaragePagination;
