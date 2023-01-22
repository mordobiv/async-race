import { createNode, createButton } from '../helpers';

function renderHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  const headerButtons = createNode('buttons');

  const toGarage = createButton('garage');
  toGarage.addEventListener('click', () => {
    const garageView = document.querySelector('.garage') as HTMLDivElement;
    const recordsView = document.querySelector('.records') as HTMLDivElement;
    if (garageView && recordsView) {
      garageView.style.display = 'block';
      recordsView.style.display = 'none';
    }
  });

  const toRecords = createButton('records');
  toRecords.addEventListener('click', () => {
    const garageView = document.querySelector('.garage') as HTMLDivElement;
    const recordsView = document.querySelector('.records') as HTMLDivElement;
    if (garageView && recordsView) {
      garageView.style.display = 'none';
      recordsView.style.display = 'block';
    }
  });

  headerButtons.append(toGarage, toRecords);

  header.append(headerButtons);

  const body = document.querySelector('body');
  body?.append(header);
}

export default renderHeader;
