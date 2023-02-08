import IUpdateGaragePageOptions from "../../../../interfaces/update-garage-page";
import updateGarageHeader from "./components.ts/update-cars-amount";
import updateGaragePageNumber from "./components.ts/update-garage-page-number";
import updateGaragePagination from "./components.ts/update-garage-pagination";
import updateGarageTable from "./components.ts/update-garage-table";

async function updateGaragePage(updatePageOptions: IUpdateGaragePageOptions) {
  if (updatePageOptions.updateHeader) updateGarageHeader();
  if (updatePageOptions.updatePagination) updateGaragePagination();
  if (updatePageOptions.updatePageNumber) updateGaragePageNumber();
  updateGarageTable();
}

export default updateGaragePage;
