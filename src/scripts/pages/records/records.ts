import { createNode } from '../../helpers';
import renderWinnersPagination from './components/pagination';
import renderTable from './components/render-table';
import renderWinnerHeader from './components/winner-header';

async function renderRecordsPage() {
  if (!sessionStorage.getItem('winnersPage')) sessionStorage.setItem('winnersPage', '1');
  const body = document.querySelector('body');
  if (body) {
    const records = document.querySelector('.records');
    if (records) records.remove();
  }
  const records = createNode('records');
  const pagination = await renderWinnersPagination();
  records.append(pagination);
  const recordsHeader = await renderWinnerHeader();
  records.append(recordsHeader);
  renderTable();
  body?.append(records);
}

export default renderRecordsPage;
