const jonas = [
  "Jonas",
  "Schmedtmann",
  1991,
  "teacher",
  ["Michael", "Peter"],
  true,
  {
    calcAge: function () {
      this.age = 2024 - jonas[2];
      return this.age;
    },
    getSummary: function () {
      return `${jonas[0]} is a ${jonas[6].calcAge()} year old ${jonas[3]}, and he has ${jonas[5] ? "a" : "no"} driver's license.`;
    },
  },
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], ":", typeof jonas[i]);
  types[i] = typeof jonas[i];
  // types.push(typeof jonas[i]); // same function as above
}

console.log(jonas[6].getSummary());
console.log(jonas[6].age);

console.log(types);
