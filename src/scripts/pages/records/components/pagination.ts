import { getRecordsAmount, getWinners } from '../../../data-controller/records';
import { createNode, createButton } from '../../../helpers';
import { winnersConfig } from '../../../config';
import renderTable from './render-table';

async function renderWinnersPagination() {
  const pagination = createNode('winners-pagination');
  const previous = createButton('Prev');
  const next = createButton('Next');

  let currentPage = sessionStorage.getItem('winnersPage');
  if (currentPage && currentPage === '1') {
    previous.disabled = true;
  }

  let recordsAmount = +(await getRecordsAmount());

  if (recordsAmount && currentPage) {
    if (+recordsAmount < winnersConfig.limit * +currentPage) next.disabled = true;
  }

  previous.addEventListener('click', () => {
    next.disabled = false;

    currentPage = +sessionStorage.getItem('winnersPage');
    currentPage -= 1;
    sessionStorage.setItem('winnersPage', `${currentPage}`);

    if (currentPage && currentPage === 1) {
      previous.disabled = true;
    }
    renderTable();
  });

  next.addEventListener('click', () => {
    previous.disabled = false;
    let currentPage = +sessionStorage.getItem('winnersPage');
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
