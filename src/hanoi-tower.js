module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor(turns / turnsSpeed * 3600);
  result['turns'] = turns;
  result['seconds'] = seconds;
  return result;
};
