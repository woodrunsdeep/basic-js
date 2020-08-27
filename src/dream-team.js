module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];
  if (members instanceof Array) {
    members.forEach(member => {
      if (typeof member === "string") {
        let letter = member.trim()[0].toUpperCase();
        dreamTeamName.push(letter);
      }
    });
  } else {
    return false;
  }
  return dreamTeamName.sort().join('');
};
