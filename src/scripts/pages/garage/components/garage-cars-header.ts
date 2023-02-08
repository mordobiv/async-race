import { createNode } from "../../../helpers";
import { getCarsAmount } from "../../../data-controller/cars";


async function renderGarageHeader() {
  const garageCarsHeader = createNode('header');
  const garageCarsHeaderLabel = createNode('header__label', 'Garage ');
  const carsAmount = await getCarsAmount();
  const garageCarsHeaderValue = createNode('header__value', `${carsAmount}`);

  garageCarsHeader.append(garageCarsHeaderLabel, garageCarsHeaderValue);
  return garageCarsHeader;
}

export default renderGarageHeader;