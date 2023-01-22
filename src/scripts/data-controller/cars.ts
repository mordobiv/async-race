import apiUrl from '../config';

const garageUrl = `${apiUrl}garage/`;

export async function getAllCars() {
  const response = await fetch(garageUrl);
  if (response.ok) {
    const allCars = await response.json();
    return allCars;
  }
  return new Error('Cannot get cars list');
}

export async function getCar(id: number) {
  const response = await fetch(`${garageUrl}${id}`);
  if (response.ok) {
    console.log(await (response).json());
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

  if (request.ok) {
    console.log('wow');
  } else {
    throw new Error('Cannot add car');
  }
}

export async function removeCar(id: number) {
  const request = await fetch(`${garageUrl}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (request.ok) {
    console.log('Perfect');
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

  if (request.ok) {
    console.log('wow');
  } else {
    throw new Error('Cannot add car');
  }
}
