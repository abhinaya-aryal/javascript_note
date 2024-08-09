const numbers = [1, 2, 3, 4];

const otherArr = numbers.map((number) => {
  return number * 10;
});

console.log(numbers, otherArr);

const users = [
  { user: "Martin", age: 32, eyes: "brown" },
  { user: "Jan", age: 20, eyes: "blue" },
];

const listOfUsers = users.map((user) => {
  return user.user;
});

console.log(listOfUsers);

listOfUsers.forEach((name) => {
  const select = document.querySelector("select");
  select.insertAdjacentHTML(
    "afterbegin",
    `<option value=${name}>${name}<option>`,
  );
});

const cars = [
  { name: "Ford", price: 200 },
  { name: "Nissan", price: 400 },
];

function convertPrice(price) {
  return price * 124;
}

const price = cars.map(function (car) {
  return `The ${car.name} is Rs.${convertPrice(car.price)}`;
});

console.log(price);
