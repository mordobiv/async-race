import { carsPerGaragePage } from "../../../../../config";
import { getCarsAmount } from "../../../../../data-controller/cars";
import { getCurrentGaragePage } from "../../../../../helpers";

function updatePrevButton() {

  const currentPage = getCurrentGaragePage();
  const previousButton = document.querySelector('.prev__garage') as HTMLButtonElement;
  if (currentPage && currentPage === '1' && previousButton) {
    previousButton.disabled = true;
  } else previousButton.disabled = false;
}

async function updateNextButton() {
  const currentPage = getCurrentGaragePage();
  const carsAmount = await getCarsAmount();
  const nextButton = document.querySelector('.next__garage') as HTMLButtonElement;
  console.log(carsAmount, carsPerGaragePage, currentPage);
  if (carsAmount && currentPage) {
    if (+carsAmount <= carsPerGaragePage * +currentPage) nextButton.disabled = true;
    else nextButton.disabled = false;
  }
}

function updateGaragePagination() {
  updatePrevButton();
  updateNextButton();
}

export default updateGaragePagination;