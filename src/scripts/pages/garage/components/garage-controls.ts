import { createNode, createButton } from '../../../helpers';

function renderGarageControls() {
  const garageControls = createNode('controls');

  const raceButton = createButton('race');
  const resetButton = createButton('reset');
  const generateButton = createButton('genarate');

  garageControls.append(raceButton, resetButton, generateButton);
  return garageControls;
}

export default renderGarageControls;
