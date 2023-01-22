function getDriveStep(velocity: number) {
  const distance = 100;
  const stepsPerSec = 60;
  const maxPossibleTime = 10;
  const minPossibleVelocity = 50;

  const time = maxPossibleTime / (velocity / minPossibleVelocity);
  const totalSteps = stepsPerSec * time;

  const stepDistance = distance / totalSteps;
  console.log(time);
  return stepDistance;
}

export default getDriveStep;
