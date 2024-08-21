const rest = new Map();
rest.set("name", "Classico Italino");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzera", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));

rest.delete(2);
console.log(rest);

console.log(rest.size);

rest.clear();

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!!"],
  [false, "Try Again!"],
]);

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Option ${key}: ${value}`);
  }
}

let answer = 2;
console.log(question.get(question.get("correct") === answer));

const restaurant = {
  name: "Gourmet Bistro",
  location: "123 Flavor Street, Foodie Town",
  openingHours: {
    sun: {
      open: true,
    },
    mon: {
      open: true,
    },
    tue: {
      open: true,
    },
    wed: {
      open: true,
    },
    thu: {
      open: true,
    },
    fri: {
      open: true,
    },
    sat: {
      open: false,
    },
  },
};

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

console.log([...question]);
