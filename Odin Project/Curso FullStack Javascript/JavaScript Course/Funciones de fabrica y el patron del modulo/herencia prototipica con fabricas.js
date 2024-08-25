function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}

const Andy = createPlayer("Andy", 100);

// console.log(Andy);

// Andy.increaseLevel();
// Andy.giveReputation();

// console.log({
//   username: Andy.name,
//   scoreReputation: Andy.getReputation(),
// });

function createPlayer(name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;

  return Object.assign({}, user, { increaseLevel });
}

// const Andy = createPlayer("Andy", 100);

// console.log(Andy);

//Existe 2 formas de heredar entre objetos y me gusto mas la utlima
