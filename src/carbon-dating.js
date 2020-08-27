const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  } else if (Number.isNaN(parseFloat(sampleActivity))) {
    return false;
  } else if (+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const activityRatio = (MODERN_ACTIVITY / parseFloat(sampleActivity));
  return Math.ceil(Math.log(activityRatio) / k);
};
