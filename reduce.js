const previous = 200;
const current = [
  { expense: "Guitar", amount: 200 },
  { expense: "Mic", amount: 100 },
  { expense: "Starp", amount: 100 },
];

const results = current.reduce((sum, expense) => {
  return sum + expense.amount;
}, previous);

console.log(results);

const users = [
  { name: "Francis", lastname: "Norton", age: 25 },
  { name: "Martha", lastname: "Norton", age: 25 },
  { name: "Rob", lastname: "Norton", age: 25 },
];

const user_name = users.reduce((start, user) => {
  start.push(user.name);
  return start;
}, []);

console.log(user_name);

const computers = [
  { type: "Laptop", price: 124, OS: "Windows" },
  { type: "Desk", price: 124, OS: "Mac" },
  { type: "Desk", price: 124, OS: "Windows" },
];

let osTypes = computers.reduce(
  (start, item) => {
    return item.OS === "Mac"
      ? { mac: start.mac + 1, windows: start.windows }
      : { mac: start.mac, windows: start.windows + 1 };
  },
  { windows: 0, mac: 0 },
);

console.log(osTypes);
