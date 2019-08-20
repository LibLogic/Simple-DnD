const modifier = 1;
const rollDie = (numSides => Math.floor(Math.random() * numSides) + 1);

const isNatural = dieRoll => dieRoll === 1 ? 'low' :
dieRoll === 20 ? 'high' : false;

const isHit = (armour, dieRoll) => {
  if (isNatural(dieRoll)) {
   return true;
  } else {
    return dieRoll + modifier > armour ? true : false;
  }
};

const getDamage = (numRolls = 2, numSides = 12) => {
    return rollDie(numSides) * numRolls;
};

const runGame = () => isHit(armour = 15, rollDie(20)) ? getDamage() : 'no damage';

console.log(runGame());