import { getRecordsAmount } from '../../../data-controller/records';
import { createNode, createButton } from '../../../helpers';
import { winnersConfig } from '../../../config';
import renderTable from './render-table';

async function renderWinnersPagination() {
  const pagination = createNode('winners-pagination');
  const previous = createButton('Prev');
  const next = createButton('Next');

  let currentPage = 0;
  const tmpPage = sessionStorage.getItem('winnersPage');
  if (tmpPage) {
    currentPage = +tmpPage;
  }
  if (currentPage && currentPage === 1) {
    previous.disabled = true;
  }

  let recordsAmount = await getRecordsAmount() || 1;

  if (recordsAmount && currentPage) {
    if (+recordsAmount < winnersConfig.limit * +currentPage) next.disabled = true;
  }

  previous.addEventListener('click', () => {
    next.disabled = false;

    const tmpPage = sessionStorage.getItem('winnersPage');
    if (tmpPage) {
      currentPage = +tmpPage;
    }
    
    currentPage -= 1;
    sessionStorage.setItem('winnersPage', `${currentPage}`);

    if (currentPage && currentPage === 1) {
      previous.disabled = true;
    }
    renderTable();
  });

  next.addEventListener('click', () => {
    previous.disabled = false;
    let currentPage = 0;
    const tmpPage = sessionStorage.getItem('winnersPage');
    if (tmpPage) {
      currentPage = +tmpPage;
    }
    currentPage += 1;
    sessionStorage.setItem('winnersPage', `${currentPage}`);
    if (recordsAmount && currentPage) {
      if (+recordsAmount < winnersConfig.limit * +currentPage) next.disabled = true;
    }
    renderTable();
  });

  pagination.append(previous, next);
  return pagination;
}

export default renderWinnersPagination;
