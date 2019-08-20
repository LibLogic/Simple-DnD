const modifier = 1;
const armour = 15;
const rollDie = (numSides => Math.floor(Math.random() * numSides) + 1);

const isNatural = dieRoll => dieRoll === 1 ? 'low' :
dieRoll === 20 ? 'high' : false;