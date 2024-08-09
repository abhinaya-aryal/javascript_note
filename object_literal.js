const createCharacter = (name, powers) => {
  return {
    name,
    powers,
    getFriends() {
      return "Luis Lane";
    },
    getEnemies() {
      return "Skeletor";
    },
  };
};

const characterObj = createCharacter("Superman", "Fly");

console.log(characterObj);

console.log(characterObj.getFriends());

var createObject = (name, lastname, age) => {
  return { name, lastname, age };
};

console.log(createObject("Mathew", "Swepson", 22));
