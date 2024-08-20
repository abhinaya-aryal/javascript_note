# Const and Let

We will use **const** whenever we expect the value of the content inside const not to change. So, once we declare a const, this should never change throughout the whole application.

**let** is opposite of the const. We can mutate let as much as we want.

In **for loop**, while declaring a variable such as i, we must use **let** keyword.

```js
for(let i = 0; i<divs.length; i++) {...}
```

# Var vs Let

| var                                                                              | let                                                                                              |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1. var has been part of JavaScript since its inception.                          | 1. let was introduced in ES6 version of JavaScript.                                              |
| 2. var is globally scoped.                                                       | 2. let is block scoped.                                                                          |
| 3. var can be declared and accessed globally.                                    | 3. let can be declared globally, but its access is limited to the block in which it is declared. |
| 4. Variables declared using var can be redeclared and updated within same scope. | 4. Variables declared with let can be updated but not redeclared within the same scope.          |

# Function Declaration vs Function Expressions

Let see the example of function declaration at first:-

```js
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
console.log(age1);
```

Let see the example of function expression:

```js
const caclcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = caclcAge2(1991);
console.log(age2);
```

> [!NOTE] > **Arrow functions** are **function expression**.

> [!WARNING]
> The main practical **difference** between **function declaration** and **function expression** is that we can actually call **function declaration before they are defined in code** while **function expression** should be called **after its declarations only**. This is due to the **hoisting in JavaScript**.

- Expressed function cannot be used before initialization.
- Expressed functions need to be assigned to be used later.
- Anonymous functions are useful for anonymous operations. They are also known as Immediately Invoked Function Expressions(IIFEs).

# Function Calling Other Function

```js
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 4));
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

# Switch Statements

```js
let day = "Friday";

switch (day) {
  case "Monday":
    console.log("It is monday");
    break;
  case "Tuesday":
    console.log("It is tuesday");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Go on work!");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  default:
    console.log("Rest");
}
```

> [!NOTE]
> **Switch cases** use **strict comparison(===)**. **Case** on switch statement are **case sensitive**. Also, if you want to carry out same thing for **multiple cases**, write the case statement without other statement inbetween. See the case for "Wednesday" and "Thursday" in above example.

> [!IMPORTANT]
> If **multiiple cases** matches a case value, the **first case** is selected. If **no matching cases** found, the program continues to **default label**. If **no default label** found, program continues **after the switch** statement.

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
  `One of character from name is ${my_name[Math.floor(Math.random() * my_name.length - 1) + 1]}.`,
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

- **AND**: **true** when **all** are **true**

  | AND   | True  | False |
  | ----- | ----- | ----- |
  | True  | True  | False |
  | False | False | False |

- **OR**: **true** when **one** is **true**

  | OR    | True | False |
  | ----- | ---- | ----- |
  | True  | True | True  |
  | False | True | False |

- **NOT**: **inverts** true/false value

# Logical Operators

```js
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false
```

```js
const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Able to drive");
} else {
  console.log("Unable to drive");
}
```

```js
const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Drive");
} else {
  console.log("Run away");
}
```

# Fat Arrow Functions

> [!CAUTION]
> Take care while using arrow function in the method of an object. **This** keyword represents global scope in arrow function not the object itself. Also, **arrow functions** cannot be **declared**; they can only be **expressed**. So, take care of **hoisting** while using arrow functions.

```js
const value = (name, age) => {
  return `My name is ${name} and my age is ${age}.`;
};

console.log(value("Mathew", 22));
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
    },
  };
};

const characterObj = createCharacter("Superman", "Fly");

console.log(characterObj);

console.log(characterObj.getFriends());
```

```js
var createObject = (name, lastname, age) => {
  return { name, lastname, age };
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

# Array and its Methods

- ## Looping Backwards

```js
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, ":", jonas[i]);
}
```

- ## Loop in Loop

```js
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting exercise ${exercise}---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight ${rep} times`);
  }
}
```

> [!NOTE]
> We have access to the variable of **outer loop** in **inner loop** too. Here, we can access **exercise** in **inner loop** too.

- ## Complex Array and Filling an Array

```js
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
  types.push(typeof jonas[i]); // same function as above. So, remove one in your codebase.
}

console.log(jonas[6].getSummary());
console.log(jonas[6].age);

console.log(types);
```

- ## Add Elements

```js
const friends = ["Michcael", "Steve", "Peter"];

let newLength = friends.push("Jay"); // add element at last position
console.log(friends, newLength);

newLength = friends.unshift("John"); // add element at first position
console.log(friends, newLength);
```

- ## Remove Elements

```js
const friends = ["Michael", "Steve", "Peter"];

let removedFriend = friends.pop(); // remove last elements on array
console.log(friends, removedFriend);

removedFriend = friends.shift(); // remove first element from an array
console.log(friends, removedFriend);
```

- ## Index Of

```js
const friends = ["Michael", "Steve", "Peter"];
console.log(friends.indexOf("Steve")); // 1
```

- ## Includes

Return **true** if there is an element and return **false** if no element matches.

```js
console.log(friends.includes("Bob")); // false
```

- ## For Each

```js
const artists = ["Clapton", "U2", "Bruno Mars", "Lamar"];

artists.forEach(function (artist) {
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

**_Complex example_** of **forEach** with more other concepts:-

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

- ## Map

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

- ## Filter

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

- ## Find

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

- ## Every & Some

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

- ## Reduce

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

- ## For Of

```js
const numbers = [10, 20, 30, 40, 50];
let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total);
```

# While Loop Usecase

**while** loop is important when we wants a **loop that does not depend on counter value** of i or any other counter. The **while** loop **does not** need to **depend** on any **counter variable**.

```js
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
  console.log(`You rolled a ${dice}.`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
```

# Continue and Break

```js
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
```

Here, as soon as **other than string** matches, it **skips** that loop and **continue** to another element. Only **strings** are consoled. It will **terminate** the loop of current element if that **passes the condition** and **continues** to next element.

```js
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
```

Here, **break** will completely **terminate the loop** after first number appears. It **does not run** for remaining array element. As soon as the **condition is discarded**, it will **break the complete for loop**.

```js
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
```

# Object with Methods

```js
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  firends: ["Michael", "Peter"],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
```

# Primitive vs Object (Object Clone)

```js
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
```

Now, let's say that Jessica will **get married** and will therefore **change her lastName**. So, let's create a **new object** for the **married Jessica**.

```js
const marriedJessica = jessica;
```

Here, we're **copying the entire object** as it looks like. But, **behind the scenes** we are actually just **copying the reference** which will then **point to the same object**.

Now, let change the **lastName** of **marriedJessica**.

```js
marriedJessica.lastName = "Davis";
```

```js
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);
```

Here, we get **before marriage** and **after marriage**, both the **lastName** as **"Davis"**. So, **lastName** "Davis" is now also in the original **jessica object** and **not** just in the **one that we copied**.

It happened because when we attempted to **copy** the original **jessica** object, it did in fact **not create** a new object in **the heap**. So, **marriedJessica** is **not** a **new object** in the heap. It's simply just **another variable** in the stack which **holds reference** to the **original object**. So, both of these **two variables** simply point to exactly **same memory address in the heap**. If we **change** a property on **marriedJessica**, it will also **change** on **jessica** itself. It is because they are just **two different names** for the **same thing**.

Although we have declared **both the object** with **const** keyword, we can **change** the object as it has **not** to do anything **with the stack**. For completely creating a **new object**, **const** kewyword will restrict it as that will reference to the complete new memory address.

**i.e. We cannot do:-**

```js
jessica = {
  firstName: "Jessica",
  lastName: "Davis",
  age: 27,
};
```

Now, let us learn to **copy the object**, so that it **will not** matter to **another object**. **Change** in the property of **one object** will not affect the **properties of another object**.

```js
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = "Davis";
```

However, there is still a **problem** because using this technique of _Object.assign()_ only works on the **first level**. In other words, if we have an **object inside the object**, then this **inner object** will still **remains the same**. So, it will still **point** to the **same place in memory**.

That's why

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

# DOM Manipulation

```js
let data = document.querySelector(".message").textContent;
console.log(data);
```

**DOM** stands for **Document Object Model** and it is basically a **structured representation of HTML document**. The **DOM** allows us to use **JavaScript to access HTML elements** and **styles** in order to manipulate them.

**for example:-** <br/>
We will be able to **change text**, **change HTML attributes** and also **change CSS styles** from our JavaScript.

So, **DOM** is basically a **connection point** between **HTML documents** and **JavaScript code**. **DOM** is automatically created by the browser as soon as the **HTML page loads**. And it is stored in a **tree structure**. In this tree, each **HTML element** is an object.

> [!NOTE]
> Most of us believe that the **DOM** and its methods and properties are actually **part of JavaScript**. However,this is **not the case**. **JavaScript** is actually just a dialect of the **ECMAScript specification**. The **DOM** and **its methods** are actually part of something called the **Web APIs**. So, the **Web APIs** are like libraries that **browsers** implement and that we can access from our **JavaScript code**. **Web APIs** are basically a libraries that are also written in **JavaScript** and are automatically available for **us to use**.

```js
document.querySelector(".header").textContent = "You're Welcome!";
```

```js
document.querySelector(".check").addEventListener("click", function () {
  console.log("I am clicked");
});
```

```js
addEventListener(event, function); // adds an event
removeEventListener(event, function); // removes an event
```
