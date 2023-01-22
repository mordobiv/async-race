import { createNode } from '../../helpers';

function renderRecordsPage() {
  const records = createNode('records');
  records.style.display = 'none';
  const body = document.querySelector('body');
  body?.append(records);
}

export default renderRecordsPage;
