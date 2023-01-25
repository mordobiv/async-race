import renderCars from "../../../components/garage-cars";

async function updateGarageTable() {
  const cars = await renderCars();
  document.querySelector('.garage')?.append(cars);
}

export default updateGarageTable;
