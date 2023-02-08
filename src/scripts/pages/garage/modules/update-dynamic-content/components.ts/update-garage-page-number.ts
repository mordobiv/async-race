import { getCurrentGaragePage } from "../../../../../helpers";

function updateGaragePageNumber() {
  const pageNumberBlock = document.querySelector('.page-number__value');
  if (pageNumberBlock) {
    pageNumberBlock.textContent = getCurrentGaragePage();
  }
}

export default updateGaragePageNumber;
