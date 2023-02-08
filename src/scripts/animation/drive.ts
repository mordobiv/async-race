import { raceStats } from '../config';

function getDriveStep(velocity: number) {
  const time = raceStats.maxAnimationTime / (velocity / raceStats.minPossibleVelocity);
  const totalSteps = raceStats.framesPerSecond * time;

  const stepDistance = raceStats.distance / totalSteps;
  return {
    stepDistance,
    time,
  };
}

export default getDriveStep;
