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

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, ":", jonas[i]);
}
