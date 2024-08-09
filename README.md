# const and let

We will use **const** whenever we expect the value of the content inside const not to change. So, once we declare a const, this should never change throughout the whole application.

**let** is opposite of the const. We can mutate let as much as we want.

In **for loop**, while declaring a variable such as i, we must use **let** keyword.
```
for(let i = 0; i<divs.length; i++) {...}
```

# Template Literals

```
let my_name = "Mathew";

console.log(`My name is ${my_name}.`);

console.log(
  `One of character from name is ${my_name[Math.floor(Math.random() * my_name.length - 1) + 1]}.`
);
```

```
let lists = [];

const player = {
  name: "Ronaldo",
  jersey: 7,
};

lists += `<li>${player.jersey}</li>`;

console.log(lists);
```

# Object Literals

```
const request = (url, data) => {
  $.ajax({method: 'post', url, data})
}

request('http://request.com', {car: ford});
```

```
const createCharacter = (name, powers) => {
  return {
    name,
    powers,
    getFriends() {
      return "Luis Lane";
    },
    getEnemies() {
      return "Skeletor";
    }
  };
};

const characterObj = createCharacter("Superman", "Fly");

console.log(characterObj);

console.log(characterObj.getFriends());
```

```
var createObject = (name, lastname, age) => {
  return {name, lastname, age};
};

console.log(createObject("Avi", "Aryal", 20));
```

# Fat Arrow Functions

```
const value = (name, age) => {
  return `My name is ${name} and age ${age}`;
};

console.log(value("james", 45));
```

```
const cars = {
  brands: ["Ford", "Audi", "BMW"],
  category: "Sport car",
  message: function () {
    return this.brands.map((brand) => {
      console.log(`${brand} is a ${this.category}.`);
    });
  },
};

cars.message();
```

# For Each
```
const artists = ["Clapton", "U2", "Bruno Mars", "Lamar"];

artists.forEach(function(artist){
  console.log(artist);
});
```
```
artists.forEach((name) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div>Hi, my name is ${name}.</div>`,
  );
});
```

***Complex example*** of **forEach** with more other concepts:-
```
const products = [
  { name: "Iphone", price: 200 },
  { name: "Motorala", price: 70 },
  { name: "Samsung", price: 150 },
  { name: "Sony", price: 98 },
];

let template = "";

products.forEach((product) => {
  function discount() {
    if (product.price < 100) {
      return `<span>On Sale!!</span>`;
    }
  }

  template += `
    <div class="product">
      <h1>${product.name} </h1}
      ${discount()}
      <strong>Price: $${product.price}</strong>
    </div>
  `;
});

document.body.insertAdjacentHTML("beforeend", template);
```

# Map

**map** should always return something.
```
const numbers = [1, 2, 3, 4];

const other Arr = numbers.map(function(number){
  return number * 10;
})

console.log(otherArray);
```
```
const users = [
  { user: "Martin", age: 32, eyes: "brown" },
  { user: "Jan", age: 20, eyes: "blue" },
];

const listOfUsers = users.map((user) => {
  return user.user;
});

listOfUsers.forEach((name) => {
  const select = document.querySelector("select");
  select.insertAdjacentHTML(
    "afterbegin",
    `<option value=${name}>${name}<option>`,
  );
});
```

**map** returns a new array containing the results of applying an operation on all original array elements.

```
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
```

# Filter

```
const products = [
  { name: "Sony TV Sonico", category: "TV", number: 20 },
  { name: "LG TB Likee", category: "TV", number: 0 },
  { name: "Dell computer", category: "COM", number: 5 },
];

const result = products.filter((product) => {
  return product.category === "TV" && product.number > 0;
});

console.log(result);
```

**filter** returns a new array containing the array elements that passed a specific test condition.

# Find

```
const brands = [
  { name: "Apple", id: 1 },
  { name: "HP", id: 2 },
  { name: "Apple", id: 3 },
];

const result = brands.find((brand) => {
  return brand.id === 3;
});

console.log(result);
```

It returns the first element of an array that matches the condition.

# Every & Some

```
const students = [
  { name: "Francis", grade: 4 },
  { name: "Martin", grade: 5 },
  { name: "Martha", grade: 7 },
];
```

if **every** finds to be false in the first check then it will stop checking further and return false.
```
let allStudentsPassedTheCourse = students.every((student) => {
  return student.grade >= 6;
});

console.log(allStudentsPassedTheCourse);
```

**some** is pretty much opposite of every. They do same thing but in a opposite way.
```
let someStudentsPassedTheCourse = students.some((student) => {
  return student.grade >= 6;
});

console.log(someStudentsPassedTheCourse);
```

Returns boolean value.

# Reduce

```
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
```

**reduce** boils ("reduces") all array element down to one single value(e.g. adding all elements together).

```
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
```

```
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
```

# For of

```
const numbers = [10, 20, 30, 40, 50];
let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total);
```
