import { apiUrl } from '../config';

const engineUrl = `${apiUrl}engine`;

export async function startStopCar(carId: number, status: 'started' | 'stopped') {
  const url = new URL(engineUrl);
  url.searchParams.set('id', `${carId}`);
  url.searchParams.set('status', status);
  const startEngineRequest = await fetch(url, {
    method: 'PATCH',
  });
  if (startEngineRequest.ok) {
    const response = await startEngineRequest.json();
    const { velocity } = response;
    return velocity;
  }
}

export async function checkEngine(carId: number) {
  const url = new URL(engineUrl);
  url.searchParams.set('id', `${carId}`);
  url.searchParams.set('status', 'drive');
  const startDriveRequest = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify({
      id: carId,
      status: 'drive',
    }),
  });
  return startDriveRequest.ok;
}
