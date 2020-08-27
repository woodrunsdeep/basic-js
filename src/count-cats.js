module.exports = function countCats(backyard) {
  const cat = "^^";
  let cats = 0;

  backyard.flat().forEach(suspect => {
    if (suspect === cat) {
      cats++;
    } 
  });
  return cats;
};
