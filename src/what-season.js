module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    (date.getUTCDay());
  } catch (err) {
    throw new Error('THROWN ' + err);
  }

  let month = date.getMonth();
  if (month <= 1 || month === 11) {
    return 'winter';
  } else if (month <= 4) {
    return 'spring';
  } else if (month <= 7) {
    return 'summer';
  } else if (month <= 10) {
    return 'autumn';
  }
};
