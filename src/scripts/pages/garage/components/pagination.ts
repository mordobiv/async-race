import { carsPerGaragePage } from '../../../config';
import { getAllCars, getCarsAmount } from '../../../data-controller/cars';
import { createButton, createNode, getCurrentGaragePage, setCurrentGaragePage } from '../../../helpers';
import updateGaragePage from '../modules/update-dynamic-content/update-garage-dynamic-content';
import renderGarageCars from './garage-cars';

const updateGaragePageOptions = {
  updatePagination: true,
  updatePageNumber: true,
}

function renderCurrentPageBlock() {
  const pageNumber = createNode('page-number');
  const pageNumberLabel = createNode('page-number__label', 'Page #');
  const pageNumberValue = createNode('page-number__value', sessionStorage.getItem('garagePage') || '1');
  pageNumber.append(pageNumberLabel, pageNumberValue);
  return pageNumber;
}

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
    const raceButton = document.querySelector('.button__race') as HTMLButtonElement;
    raceButton.disabled = false;
    next.disabled = true;
    const resetButton = document.querySelector('.button__reset') as HTMLButtonElement;
    if (resetButton) resetButton.click();
    carsAmount = await getCarsAmount();

    currentPage = getCurrentGaragePage();
    setCurrentGaragePage(+currentPage + 1);
    currentPage = currentPage + 1;

    const garageCars = await renderGarageCars();
    const garageView = document.querySelector('.garage');
    garageView?.append(garageCars);

    await updateGaragePage(updateGaragePageOptions);
  });

  previous.addEventListener('click', async () => {
    const raceButton = document.querySelector('.button__race') as HTMLButtonElement;
    raceButton.disabled = false;
    previous.disabled = true;
    currentPage = getCurrentGaragePage();
    setCurrentGaragePage(+currentPage - 1);

    const garageCars = await renderGarageCars();
    const garageView = document.querySelector('.garage');
    garageView?.append(garageCars);

    const resetButton = document.querySelector('.button__reset') as HTMLButtonElement;
    if (resetButton) resetButton.click();

    updateGaragePage(updateGaragePageOptions);
  });

  const currentPageBlock = renderCurrentPageBlock();
  paginationBlock.append(previous, currentPageBlock, next);
  return paginationBlock;
}

export default renderGaragePagination;
