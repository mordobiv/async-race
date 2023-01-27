import { apiUrl } from '../config';

const garageUrl = `${apiUrl}garage/`;

export async function getAllCars(options?: { _limit: number, _page: string}) {
  const url = new URL(garageUrl);
  if (options) {
    Object.keys(options).forEach((key) => {
      url.searchParams.set(key, `${options[key as keyof typeof options]}`);
    });
  }
  const response = await fetch(url);

  if (response.ok) {
    const allCars = await response.json();
    return allCars;
  }
  return new Error('Cannot get cars list');
}

export async function getCar(id: number) {
  const response = await fetch(`${garageUrl}${id}`);
  if (response.ok) {
    return response.json();
  }
}

export async function createCar(car: { name: string, color: string }) {
  const request = await fetch(garageUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });

  // if (request.ok) {
    // console.log('wow');
  return request.json();
  // }
  // throw new Error('Cannot add car');
}

export async function removeCar(id: number) {
  const request = await fetch(`${garageUrl}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (request.ok) {
    // console.log('Perfect');
  }
}

export async function updateCar(id: number, name: string, color = '123') {
  const car = {
    name,
    color,
  };
  const request = await fetch(`${garageUrl}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
}

export async function getCarsAmount() {
  const url = new URL(garageUrl);
  url.searchParams.set('_limit', '1');
  const request = await fetch(url);
  return request.headers.get('X-Total-Count');
}
