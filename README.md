# const and let

We will use **const** whenever we expect the value of the content inside const not to change. So, once we declare a const, this should never change throughout the whole application.

**let** is opposite of the const. We can mutate let as much as we want.

In **for loop**, while declaring a variable such as i, we must use **let** keyword.
```js
for(let i = 0; i<divs.length; i++) {...}
```



# If Else

**Condition** is something that will return the **boolean** value. **Boolean** value means either **true** or **false**.

```js
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Eligible`);
} else {
  console.log(`Not Eligible`);
}
```

> [!IMPORTANT]
> The variables that are created inside the **if** block using **let** keyword are only accessible inside that same block and can't be accessed from outside. So, we have to define them outside at first and then we can reassign the value conditionally in the **if** block if we need the variable outside the block.




# Truthy and Falsy Values

The falsy values on **JavaScript** are:-
- false
- 0
- '' (empty string)
- undefined
- null
- Nan

Other than these are truthy values.

```js
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false

console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
```

```js
const money = 0;
if (money) {
  console.log("Don't spend");
} else {
  console.log("Get a job!");
}
```

> [!CAUTION]
> We have to take care of **0** numeric value when using it in condition as it is determined as **falsy** value.





# Type Conversion and Coercion

```js
const inputYear = "1991";
console.log(inputYear + 18);
```

This will **concatenate** the numbers by coercing 18 to the string.

For **mathematical calculation**,

```js
console.log(Number(inputYear) + 18);
```

```js
console.log(String(23));
```
Here, we do the **type conversion** manually. In most of the cases, **JavaScript** will do this for us automatically with the help of type coercion. **Number** and **String** are built in function on **JavaScript**.

```js
console.log("I am " + 23 + " years old.");
```

The output will be a **string**.

```js
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); // 46
console.log("23" > "18"); // true
```

```js
let n = "1" + 1;
n = n - 1;
console.log(n); // 10
```

Here , first statement will concat **1** and **1** forming **11**. Then, **1** is subtracted from **11** causing the answer to be **10**.

```js
console.log(2 + 3 + 4 + "5"); // 95
```

Here, at first addition will occur of three integers i.e. **2 + 3 + 4 = 9**. Afterward, **5** is concatenated to the **9** forming the answer to be **95**.





# Template Literals

```js
let my_name = "Mathew";

console.log(`My name is ${my_name}.`);

console.log(
  `One of character from name is ${my_name[Math.floor(Math.random() * my_name.length - 1) + 1]}.`
);
```

```js
console.log(`F\t  C\n`);
for (fahr = 0; fahr <= 300; fahr = fahr + step) {
  console.log(`${fahr}\t ${((5 / 9) * (fahr - 32)).toFixed(2)}\n`);
}
```

```js
let lists = [];

const player = {
  name: "Ronaldo",
  jersey: 7,
};

lists += `<li>${player.jersey}</li>`;

console.log(lists);
```

It is good to use **backticks** (``) for every string.




# Multiline String

Template literal is used for **multiline string** too.

```js
console.log(`String with
multiple
lines`);
```




# Boolean Logic

**AND**: **true** when **all** are **true**

| AND   | True  | False |
|-------|-------|-------|
| True  | True  | False |
| False | False | False |


**OR**: **true** when **one** is **true**

|   OR   |   True   |   False   |
|--------|----------|-----------|
|  True  |  True    |   True    |
|  False |  True    |  False    |

**NOT**: **inverts** true/false value





# Fat Arrow Functions

> [!CAUTION]
> Take care while using arrow function in the method of an object. **This** keyword represents global scope in arrow function not the object itself.

```js
const value = (name, age) => {
return `My name is ${name} and age ${age}`;
};

console.log(value("james", 45));
```

```js
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




# Default Function Arguments

```js
const cars = (brand = "Ford") => {
  console.log(`My brand is ${brand}.`);
};

cars();
cars("BMW");
```




# Object Literals

```js
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

```js
var createObject = (name, lastname, age) => {
  return {name, lastname, age};
};

console.log(createObject("Avi", "Aryal", 20));
```




# Operator Precedence

Visit [Operator Precedence in MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) and go through the document.

Assignment operators have lesser precedence than mathematical and other operators.




# String and numbers

```js
console.log("foo".repeat(3 * 10));
```
**repeat** will repeat foo for 30 times.

```js
var word = "camera";
console.log(word.indexOf("era")); // 3
```
**indexOf** returns the index of first character in the given word. If there is no match, then it will return -1.

```js
console.log(word.startsWith("cam")); // true
console.log(word.startsWith("am", 1)); //true
```
**startsWith** return the boolean value whether the word start with given character or substring or not. If an optional position is provided then it returns whether provided substring starts from the given position or not.

```js
console.log(word.endsWith("era", 4)); // false
```
**endsWith** is same as that of startsWith but check the index of an end character +1. For _era_ on _camera_, it is 6.

```js
console.log(word.includes("ame")); // true
console.log(word.includes("me", 2)); // true
```
**includes** is similar to **startsWith** and **endsWith**.

```js
console.log(Number.isSafeInteger(200)); // true
console.log(Number.isSafeInteger(0.022321)); //false
```

```js
console.log(Number.isInteger(200)); // true
console.log(Number.isInteger(-5000)); // true
console.log(Number.isInteger(0.022321)); // false
```

```js
console.log(Math.trunc(42.8)); // 42
console.log(Math.trunc(-10.1)); // -10
```
**trunc** will discard the part after decimal.




# For Each
```js
const artists = ["Clapton", "U2", "Bruno Mars", "Lamar"];

artists.forEach(function(artist){
  console.log(artist);
});
```
```js
artists.forEach((name) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div>Hi, my name is ${name}.</div>`,
  );
});
```

***Complex example*** of **forEach** with more other concepts:-
```js
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

```js
const numbers = [1, 2, 3, 4];

const other Arr = numbers.map(function(number){
  return number * 10;
})

console.log(otherArray);
```
```js
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

```js
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

```js
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

```js
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

```js
const students = [
  { name: "Francis", grade: 4 },
  { name: "Martin", grade: 5 },
  { name: "Martha", grade: 7 },
];
```

if **every** finds to be false in the first check then it will stop checking further and return false.
```js
let allStudentsPassedTheCourse = students.every((student) => {
  return student.grade >= 6;
});

console.log(allStudentsPassedTheCourse);
```

**some** is pretty much opposite of every. They do same thing but in a opposite way.
```js
let someStudentsPassedTheCourse = students.some((student) => {
  return student.grade >= 6;
});

console.log(someStudentsPassedTheCourse);
```

Returns boolean value.




# Reduce

```js
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

```js
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

```js
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

```js
const numbers = [10, 20, 30, 40, 50];
let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total);
```




# Rest Operator

```js
function args(...arguments) {
  console.log(arguments);
}

args("Val1", "Val2", "Val3");
```




# Spread Operator

```js
const brands = ["Ford", "Nissan"];
const otherBrand = ["Audi", "BMW"];

const newArray = [...brands, ...otherBrand];

console.log(newArray);
```

```js
function showItems(arg1, ...arg2) {
  let arr = [...arg1, ...arg2];
  console.log(arr);
}

showItems(["dog", "cat"], "turtles", "sharks");
```




# Destructuring

```js
const user = {
  name: "Francis",
  lastname: "Jones",
  age: 25,
};

const { name } = user;
const { lastname } = user;
const { age } = user;

console.log(name, lastname, age);
```

OR

```js
const { name, lastname, age } = user;
```

```js
const cars = ["camaro", "nova", "a4"];

const [camaro, nova, a4] = cars;
console.log(camaro);

const [camaro, ...rest] = cars;
console.log(rest);
```





# Promises and Fetch

```js
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Sorry", error));
```
