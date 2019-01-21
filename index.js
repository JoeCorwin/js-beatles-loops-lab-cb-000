var beatlesPlay = []

function theBeatlesPlay(musicians, instruments) {
  for (let n = 0; n < musicians.length; n++) {
    beatlesPlay.push(`${musicians[n]} plays ${instruments[n]}`)
  }
  return beatlesPlay
}

function johnLennonFacts(facts) {
  let exclamArray = [];
  let n = 0;
  while (n < facts.length) {
    exclamArray.push(`${facts[n]}!!!`);
    n++
  }
  return exclamArray
}

function iLoveTheBeatles(n) {
  let iLoveArray = ['I love the Beatles!'];
  do{
    return iLoveArray} while (n < 15)
}
