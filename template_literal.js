let my_name = "Mathew";

console.log(`My name is ${my_name}.`);

console.log(
  `One of character from name is ${my_name[Math.floor(Math.random() * my_name.length - 1) + 1]}.`,
);

let lists = [];

const player = {
  name: "Ronaldo",
  jersey: 7,
};

lists += `<li>${player.jersey}</li>`;

console.log(lists);
