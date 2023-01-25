import { getWinners } from '../../../data-controller/records';
import { createTableCell, createTableHeader, renderColorSvg } from '../../../helpers';
import { getAllCars } from '../../../data-controller/cars';
import IWinner from '../../../interfaces/winner';
import { winnersConfig } from '../../../config';
import urlWinnersSort from '../../../interfaces/url-winners-sort';

async function renderTable(urlOptions?: urlWinnersSort) {
  const table = document.createElement('table');
  table.className = 'winners';
  const headerRow = document.createElement('tr');
  headerRow.className = 'winners__header';
  const tableHeaderNumber = createTableHeader('header__number', '#');
  const tableHeaderCar = createTableHeader('header__car', 'Car');
  const tableHeaderName = createTableHeader('header__name', 'Name');

  const tableHeaderWins = createTableHeader('header__wins clickable', 'Wins ⇅');
  tableHeaderWins.addEventListener('click', () => {
    const options = {
      sort: 'wins',
      order: sessionStorage.getItem('winnersOrder') === 'asc' ? 'ASC' : 'DESC',
    };
    if (sessionStorage.getItem('winnersOrder') === 'asc') {
      sessionStorage.setItem('winnersOrder', 'desc');
    } else sessionStorage.setItem('winnersOrder', 'asc');
    renderTable(options);
  });

  const tableHeaderTime = createTableHeader('header__time', 'Time ⇅');
  tableHeaderTime.addEventListener('click', () => {
    const options = {
      sort: 'time',
      order: sessionStorage.getItem('winnersOrder') === 'asc' ? 'ASC' : 'DESC',
    };
    if (sessionStorage.getItem('winnersOrder') === 'asc') {
      sessionStorage.setItem('winnersOrder', 'desc');
    } else sessionStorage.setItem('winnersOrder', 'asc');
    renderTable(options);
  });

  headerRow.append(
    tableHeaderNumber,
    tableHeaderCar,
    tableHeaderName,
    tableHeaderWins,
    tableHeaderTime,
  );
  table.append(headerRow);
  const winners = await getWinners(urlOptions);
  let counter = 0 + winnersConfig.limit * (+(sessionStorage.getItem('winnersPage') || 1) - 1);
  const cars = await getAllCars();
  winners.forEach(async (winner: IWinner) => {
    counter += 1;
    const dataRow = document.createElement('tr');
    const numberCell = createTableCell(`${counter}`);

    const carCell = document.createElement('td');
    let nameCell = document.createElement('div');
    for (let i = 0; i < cars.length; i += 1) {
      if (cars[i].id === winner.id) {
        nameCell = createTableCell(cars[i].name);
        carCell.innerHTML = renderColorSvg(cars[i].color);
      }
    }
    const winsCell = createTableCell(`${winner.wins}`);
    const timeCell = createTableCell(`${winner.time}`);
    dataRow.append(numberCell, carCell, nameCell, winsCell, timeCell);
    table.append(dataRow);
  });
  const records = document.querySelector('.records');
  if (records?.querySelector('.winners')) records.querySelector('.winners')?.remove();
  records?.append(table);
}

export default renderTable;
