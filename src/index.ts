import renderGaragePage from './scripts/pages/garage/garage';
import renderRecordsPage from './scripts/pages/records/records';
import renderHeader from './scripts/pages/header';

async function renderApp() {
  renderHeader();
  renderGaragePage();
  await renderRecordsPage();
  (document.querySelector('.records') as HTMLDivElement).style.display = 'none';
}

renderApp();
