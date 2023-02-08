import { getCarsAmount } from "../../../../../data-controller/cars";

async function updateGarageHeader () {
  const header = document.querySelector('.header__value');
  if (header) {
    header.textContent = await getCarsAmount();
  }
}

export default updateGarageHeader;
