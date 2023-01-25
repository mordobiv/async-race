import { apiUrl, winnersConfig } from '../config';

const winnersUrl = `${apiUrl}winners/`;

export async function getWinners(renderOptions?: { sort: 'wins' | 'time', order: 'ASC' | 'DESC' }) {
  let urlOptions = {};
  console.log(renderOptions);

  if (renderOptions) {
    Object.keys(winnersConfig).forEach((key) => {
      if (!(key in renderOptions)) {
        urlOptions[key] = winnersConfig[key];
      } else {
        urlOptions[key] = renderOptions[key];
      }
    });
  } else urlOptions = winnersConfig;
  urlOptions.page = sessionStorage.getItem('winnersPage');

  // urlOptions.limit = winnersConfig.limit;
  // urlOptions.page = winnersConfig.page;

  const url = new URL(winnersUrl);
  Object.keys(urlOptions).forEach((key) => {
    url.searchParams.set(`_${key}`, `${urlOptions[key]}`);
  });
  const winnersRequest = await fetch(url);
  if (winnersRequest.ok) {
    return winnersRequest.json();
  }
}

export async function getWinner(id: number) {
  const url = new URL(`${winnersUrl}${id}`);
  const winnerRequest = await fetch(url);
  if (winnerRequest.ok) {
    return winnerRequest.json();
  }
  return winnerRequest.status;
}

export async function createWinner(id: number, time: number) {
  const recordNode = {
    id,
    wins: 1,
    time,
  };
  const createWinnerRequest = await fetch(winnersUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recordNode),
  });
  if (createWinnerRequest.ok) {
    return createWinnerRequest.json();
  }
}

export async function deleteWinner(id:number) {
  const url = `${winnersUrl}${id}`;
  const deleteWinnerRequest = await fetch(url, {
    method: 'DELETE',
  });
  if (deleteWinnerRequest.ok) {
    return deleteWinnerRequest.json();
  }
}

export async function updateWinner(id: number, wins: number, time: number) {
  const url = `${winnersUrl}${id}`;
  const updateWinnerRequest = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wins,
      time,
    }),
  });
  if (updateWinnerRequest.ok) {
    return updateWinnerRequest.json();
  }
}

export async function getRecordsAmount() {
  const url = new URL(winnersUrl);
  url.searchParams.set('_limit', '1');
  const response = await fetch(url);
  if (response.ok) {
    return response.headers.get('X-Total-Count');
  }
}
