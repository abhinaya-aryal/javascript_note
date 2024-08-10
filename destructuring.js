const user = {
  name: "Francis",
  lastname: "Jones",
  age: 25,
};

// const { name } = user;
// const { lastname } = user;
// const { age } = user;

// console.log(name, lastname, age);

const { name, lastname, age } = user;
console.log(name, lastname, age);

const cars = ["camaro", "nova", "a4"];

// const [camaro, nova, a4] = cars;
// console.log(camaro);

const [camaro, ...rest] = cars;
console.log(rest);
