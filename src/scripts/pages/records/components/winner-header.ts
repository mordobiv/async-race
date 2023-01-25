import { createNode } from '../../../helpers';
import { getRecordsAmount } from '../../../data-controller/records';

async function renderWinnerHeader() {
  const recordsLabel = createNode('records__label', 'Records:');
  const recordsAmount = await getRecordsAmount();
  const recordsValue = createNode('records__amount', recordsAmount || '0');
  const recordsAmountBlock = createNode('records__amount-block');
  recordsAmountBlock.append(recordsLabel, recordsValue);
  return recordsAmountBlock;
}

export default renderWinnerHeader;
