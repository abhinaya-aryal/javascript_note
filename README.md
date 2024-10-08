# Const and Let

We will use **const** whenever we expect the value of the content inside const not to change. So, once we declare a const, this should never change throughout the whole application.

**let** is opposite of the const. We can mutate let as much as we want.

In **for loop**, while declaring a variable such as i, we must use **let** keyword.

```js
for(let i = 0; i<divs.length; i++) {...}
```

<!-- prettier-ignore -->
> [!IMPORTANT]
> If we don't specify **const, let and var** to the variable and assign a value, then that variable becomes **global variable** i.e. can be accessed from anywhere.

```js
function check() {
  y = "GeeksForGeeks";
}
check();
console.log(y); // GeeksForGeeks
```

# Var vs Let

| var                                                                              | let                                                                                              |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1. var has been part of JavaScript since its inception.                          | 1. let was introduced in ES6 version of JavaScript.                                              |
| 2. var is globally scoped.                                                       | 2. let is block scoped.                                                                          |
| 3. var can be declared and accessed globally.                                    | 3. let can be declared globally, but its access is limited to the block in which it is declared. |
| 4. Variables declared using var can be redeclared and updated within same scope. | 4. Variables declared with let can be updated but not redeclared within the same scope.          |

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

<!-- prettier-ignore -->
> [!NOTE]  
> **Arrow functions** are **function expressions**.

<!-- prettier-ignore -->
> [!WARNING]
> The main practical **difference** between **function declaration** and **function expression** is that we can actually call **function declaration before they are defined in code** while **function expression** should be called **after its declarations only**. This is due to the **hoisting in JavaScript**.

- Expressed function cannot be used before initialization.
- Expressed functions need to be assigned to be used later.
- Anonymous functions are useful for anonymous operations. They are also known as Immediately Invoked Function Expressions(IIFE).

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

# Higher Order Functions

```js
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is best!", upperFirstWord);
```

# Function Returning Function

```js
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");

greet("Hey")("Ram");
greet("Hello")("Hari");
```

# Immediately Invoked Function

```js
(function () {
  console.log("This will never run again as there is no way to call it!!");
})();

(() => console.log("Same as above but in fat arrow syntax"))();
```

# Closures

**Closure** is not a feature that we explicitly use. So, we **don't create closure manually**. A **closure** simply happens **automatically** in certain situations; we just need to **recognize those situations**.

**Every function** always has access to the **variable environment** of the execution context in which the **function was created** even after that **execution context** is gone.

A **closure** gives a function access to all the **variables of its parent function**, even after that **parent function** has returned. The function keeps a **reference** to its **outer scope**, which preserves the scope chain throughout time.

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

Here, it seems like code shouldn't work. In some programming languages, the **local variables** within a function exist for just the duration of that function's execution. Once `makeFunc()` finishes executing, you might expect that the `name` variable would no longer be accessible. But, **this is not the case in JavaScript**.

The reason is that **functions in JavaScript form closures**. A **closure** is the combination of a **function** and the **lexical environment** within which that function was declared. This **environment** consists of any variables that were in-scope at the time the closure was created. In this case, `myFunc` is a reference to the instance of the function `displayName` that is created when `makeFunc` is run. The instance of `displayName` maintains a reference to its lexical environment, within which the variable `name` exists. For this reason, when `myFunc` is invoked, the variable `name` remains available for use, and "Mozilla" is passed to `console.log`.

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

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
> [!NOTE] 
> **Switch cases** use **strict comparison(===)**. **Case** on switch statement are **case sensitive**. Also, if you want to carry out same thing for **multiple cases**, write the case statement without other statement inbetween. See the case for "Wednesday" and "Thursday" in above example.

<!-- prettier-ignore -->
> [!IMPORTANT]
> If **multiiple cases** matches a case value, the **first case** is selected. If **no matching cases** found, the program continues to **default label**. If **no default label** found, program continues **after the switch** statement.

# Loop in Loop

```js
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting exercise ${exercise}---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight ${rep} times`);
  }
}
```

<!-- prettier-ignore -->
> [!NOTE]
> We have access to the variable of **outer loop** in **inner loop** too. Here, we can access **exercise** in **inner loop** too.

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

<!-- prettier-ignore -->
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

# Short Circuiting

**Logical Operators** can use **any** data type. They can return **any** data type. They do something called **short circuiting**.

```js
console.log(3 || "JONAS"); // 3
```

In the case of **OR** operator, **short circuiting** means that if the **first** value is a **truthy** value, it will immediately return that **first value**.

```js
console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || "" || "" || "Hello" || 23 || null); // Hello
```

<!-- prettier-ignore -->
> [!NOTE] 
> **OR** operator will return the **first** truthy value of all the operands or simply the **last** value if all of them are **falsy**.

```js
console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // Jonas
```

So, the **AND** operator is only **true** if all the operands are **true**. As soon as it encounter **falsy** value it will stop the execution in that **falsy** value.

<!-- prettier-ignore -->
> [!NOTE]
> **AND** operator will return the **first falsy** value or the **last** value if all of operands are true.

# Operator Precedence

Visit [Operator Precedence in MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) and go through the document.

Assignment operators have lesser precedence than mathematical and other operators.

# String

```js
const plane = "A320A";

console.log(plane[1]);

console.log(plane.length);

console.log(plane.lastIndexOf("A"));

console.log(plane.slice(2)); // 20A
console.log(plane.slice(1, 3)); // 32

console.log(plane.toLowerCase());
console.log(plane.toUpperCase());

const trimmedEmail = lowerEmail.trim(); // removes all white spaces

console.log("a very nice string".split(" "));
console.log(["Hello", "world", "!!"].join(" "));
```

```js
const message = "Go to gate 23!";
console.log(message.padStart(22, "+").padEnd(30, "+")); // 22 and 30 are the maxlength to be

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64784473837));
```

```js
const priceGB = "288,97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
```

```js
console.log("foo".repeat(3 * 10));
```

**repeat** will repeat foo for 30 times.

```js
var word = "camera";
console.log(word.indexOf("era")); // 3
console.log(word.replace("am", "amam"));
```

**indexOf** returns the index of first character in the given word. If there is no match, then it will return -1. **replace** replaces the **first occurrence** of the substring with provided substring.

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

# Number

In **JavaScript**, all **numbers** are represented internally as **floating point** numbers. **Numbers** are always stored in the **binary format**.

<!-- prettier-ignore -->
> [!IMPORTANT]
> It is more difficult to represent some **fractions** in **JavaScript**. So, **be aware** that we cannot do really **precise** scientific or financial calculations in **JavaScript**.

```js
console.log(0.1 + 0.2 === 0.3); // false
console.log(Number("23")); // 23
console.log(+"23"); // 23
```

```js
console.log(Number.parseInt("30px")); // 30
console.log(Number.parseInt("e32")); // Nan ; because always should start with integer in the string value
console.log(Number.parseInt("2.5rem")); // 2

console.log(Number.parseFloat("2.5rem")); // 2.5
```

```js
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20x")); // true
```

<!-- prettier-ignore -->
> [!CAUTION]
> `isNaN` is not a recommended or good way to **check** whether provided value is a **number or not**. The better way is to use `isFinite`.

```js
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
```

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
console.log(Math.trunc(42.8)); // 42 ; trunc will discard the part after decimal
console.log(Math.trunc(-10.1)); // -10
```

# Math and Rounding

```js
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2
console.log(8 ** 2); // 64
```

```js
console.log(Math.max(5, 18, 23, 11)); // 23
console.log(Math.min(5, 18, "3", 26)); // 3
```

```js
console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.159...
```

```js
console.log(Math.trunc(Math.random() * 6) + 1);
```

```js
const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(10, 20));
```

```js
console.log(Math.round(23.3)); // 23

console.log(Math.ceil(23.3)); // 24

console.log(Math.floor(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23

console.log(Math.floor(-23.3)); // -24
```

```js
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.3752).toFixed(2)); // 2.38
```

# Remainder operator

**remainder** operator simply returns the **remainder** of division.

```js
console.log(5 % 2); // 1
```

# BigInt

```js
console.log(2 ** 53 - 1); // 9007199254740991
```

This is the **biggest** number that **JavaScript** can represent safely.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

**BigInt** stands for big integer and it can be used to store numbers as large as we want i.e. bigger than the above number.

```js
console.log(3456788654323456786543214567); // exact this number is not displayed
```

Now, using **BigInt**

```js
console.log(3456788654323456786543214567n); // n represents BigInt
```

# Date and Time

```js
const now = new Date(); // current date and time
console.log(now);
```

```js
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 ~ November as Jan starts from 0
```

Other available methods are:-

```js
getDate();
getDay();
getHours();
getMinutes();
getSeconds();
getTime();
```

`getTime` will give timestamp. We can even calculate date and time with the help of **timestamp**.

```js
console.log(Date.now()); // returns number of milliseconds elapsed since Jan 1, 1970
```

```js
const now = new Date(); // current date and time

const day = `${now.getDate()}`.padStart(2, 0); // 22
const month = `${now.getMonth()}`.padStart(2, 0); // 07

console.log(now.toISOString()); // returns date as a string value in ISO format
```

```js
const calcDaysPassed = (date1, date2) => {
  return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
};

const passedDays = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(passedDays); // 10
```

# Internationalizing Date and Number

```js
const now = new Date();
console.log(new Intl.DateTimeFormat("en-NP").format(now)); // 8/22/2024
console.log(new Intl.DateTimeFormat("ne-NP").format(now)); // २०२४-०८-२२
```

```js
const now = new Date();

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const date = new Intl.DateTimeFormat("ne-NP", options).format(now);
console.log(date); // २०२४ अगस्ट २२, बिहिबार: १७:४६
```

To get the **region and language** from the browser automatically:-

```js
const now = new Date();

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const locale = navigator.language;
console.log(locale);

date = new Intl.DateTimeFormat(locale, options).format(now);
console.log(date);
```

```js
const num = 3884764.23;
console.log(new Intl.NumberFormat("ne-NP").format(num)); // ३८,८४,७६४.२३

const currency = new Intl.NumberFormat("ne-NP", {
  style: "currency",
  currency: "NPR",
}).format(34343);
console.log(currency); // नेरू ३४,३४३.००
```

# Array and its Methods

## Slice, Splice and Reverse

```js
let arr = ["a", "b", "c", "d", "e"];
```

```js
console.log(arr.slice(2)); // ['c', 'd', 'e'] Returns a copy of a section of an array.
console.log(arr.slice(2, 4)); //['c', 'd'] here end index is exclusive
console.log(arr.slice(-1)); // ['e']
```

```js
console.log(arr.splice(2)); // mutates original array too. remove and return ['c', 'd', 'e'] from original arr making it ['a', 'b'].
arr.splice(-1); // removes last element of an  arr
arr.splice(1, 2); // 2 elements will be removed starting from index 1
```

```js
console.log(arr.reverse()); // It also mutates the original array making it ['e', 'd', 'c', 'b', 'a'].
```

## Flat and FlatMap

```js
const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array.flat()); // returns new array with all sub-array concatenated upto specified depth

const arrayDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrayDeep.flat(2));
```

```js
const accounts = [
  {
    owner: "Jonas",
    movements: [200, -100, 340, -300, 50, 400, -150, 1300],
  },
  {
    owner: "Jessica",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  },
  {
    owner: "Steven",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
  },
  {
    owner: "Sarah",
    movements: [430, 1000, 700, 50, 90],
  },
];

const overBalance = accounts
  .flatMap((acc) => acc.movements) // flatten all movenent across accounts
  .reduce((acc, mov) => acc + mov, 0);

console.log(overBalance); // Output will be the sum of all movements
```

## Sorting Array

```js
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

console.log(accounts.flatMap((acc) => acc.movements).sort((a, b) => a - b)); // ascending order
console.log(accounts.flatMap((acc) => acc.movements).sort((a, b) => b - a)); // descending order
```

## Looping Backwards

```js
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, ":", jonas[i]);
}
```

## Array.from

```js
const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7]
```

```js
const account = {
  movements: [200, -100, 340, -300, 50, 400, -150, 1300],
};

const movementsUI = Array.from(document.querySelectorAll(".movements"), (el) =>
  Number(el.textContent.replace("E", " ")),
);
console.log(movementsUI); // [1300, -150, 400, 50, -300, 340, -100, 200]

const movementsUiWithSpread = [...document.querySelectorAll(".movements")].map(
  (el) => el.textContent.replace("E", "$"),
);
console.log(movementsUiWithSpread); // ['$1300', '$-150', '$400', '$50', '$-300', '$340', '$-100', '$200']
```

## Complex Array

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

## Filling Array

```js
const x = new Array(7); // Create an array with 7 empty elements

x.fill(1, 3, 5); // fills item 1 starting from index 3 and ends exclusively at index 5

x.fill(1); // fills all the elements with 1
```

## Add Elements

```js
const friends = ["Michcael", "Steve", "Peter"];

let newLength = friends.push("Jay"); // add element at last position
console.log(friends, newLength);

newLength = friends.unshift("John"); // add element at first position
console.log(friends, newLength);
```

## Remove Elements

```js
const friends = ["Michael", "Steve", "Peter"];

let removedFriend = friends.pop(); // remove last elements on array
console.log(friends, removedFriend);

removedFriend = friends.shift(); // remove first element from an array
console.log(friends, removedFriend);
```

## Index Of

```js
const friends = ["Michael", "Steve", "Peter"];
console.log(friends.indexOf("Steve")); // 1
```

## Includes

Return **true** if there is an element and return **false** if no element matches.

```js
console.log(friends.includes("Bob")); // false
```

## For Each

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

## Map

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

## Filter

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

## Find

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

## Every & Some

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

## Reduce

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

## For Of

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
  friends: ["Michael", "Peter"],
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

However, there is still a **problem** because using this technique of `Object.assign()` only works on the **first level**. In other words, if we have an **object inside the object**, then this **inner object** will still **remains the same**. So, it will still **point** to the **same place in memory**.

That's why, we say that this `Object.assign()` only creates a **shallow copy** and **not a deep clone** which is what we would like to have. So, a **shallow copy** will only copy the properties in the first level while **deep clone** would copy everything.

Now, a **deep clone** is what we would need here but it is not easy to achieve. Usually, we do **deep clone** using **external library** such as **_Lo-Dash_**.

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

# Object Keys, Values and Entries

```js
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

const properties = Object.keys(restaurant); // property names
console.log(properties);

const values = Object.values(restaurant); // property values
console.log(values);

const entries = Object.entries(restaurant); // entire object
console.log(entries);
```

# Call and Bind

```js
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
```

```js
lufthansa.book(239, "Jonas Schmedtmann");
console.log(lufthansa);
```

```js
const book = lufthansa.book;

book.call(eurowings, 23, "Sarah Williams"); // calls a method of an object substituting another object for current object
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);
```

```js
const bookEW = book.bind(eurowings); // this keyword inside the function refer to provided object
const bookLH = book.bind(lufthansa);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
```

```js
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

eurowings.planes = 10;
const bought = lufthansa.buyPlane.bind(eurowings);
bought();
```

```js
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29
```

# Optional Chaining

```js
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
console.log(users[0]?.name ?? "User Array Empty");
```

With **optional chaining** if a certain property **does not** exist, then **undefined** is returned immediately.

```js
console.log(restaurant.openingHours.mon?.open);
```

So, only if **mon** exists then this **open** property will be read from there. Else, **undefined** will be returned **(nullish concept)**.

# Nullish Coalescing Operator

**Nullish Coalescing** is an operator that was introduced in **ES2020**.

```js
const guestCorrect = restaurant.numGuests ?? 10;
```

<!-- prettier-ignore -->
> [!NOTE]
> The **nullish coalescing (??)** operator is a logical operator that returns its **right-hand side** operand when its **left-hand side** operand is **null or undefined**, and **otherwise** returns its **left-hand side** operand.

The **nullish coalescing** operator works with the idea or with the concept of **nullish** values instead of **falsy** values. Nullish values are:-

- null
- undefined

# Sets

**Set** is basically just a **collection of unique values**. **Set** can **never** have **any duplicate**.

```js
const orderSet = new Set(["Pasta", "Pizza"]);
console.log(orderSet);
```

<!-- prettier-ignore -->
> [!NOTE]
> **Sets** can also handle **mixed data types**.

```js
const orderSet = new Set(["Pasta", "Pizza", "Coffee", "Pizza"]);
console.log(orderSet);
```

It will consist all the **unique values** only. So, there will be **only one** pizza and another will be removed by **set**. Also, there are **no** key value pairs, it's just a bunch of values **grouped together**. And just like **arrays**, **set** are also **iterables**.

```js
console.log(orderSet.size); // 3

console.log(orderSet.has("Pizza")); // true

console.log(orderSet.add("Garlic Bread"));

orderSet.delete("Coffee");
console.log(orderSet);
orderSet.clear();
```

<!-- prettier-ignore -->
> [!IMPORTANT]
> There is **no way** of retrieving values from a **set**. We have only **has** method to check whether the value **is in** set or not. If we need to **store and retrieve** the value later then **array** should be used.

We can **loop** through the **set**.

```js
for (const order of orderSet) {
  console.log(order);
}
```

The greatest **usecase** of **set** is actually to **remove duplicate** values of arrays.

```js
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const uniqueStaffSet = new Set(staff);

const uniqueStaffArr = [...new Set(staff)];
```

# Maps

**Map** is the **data structure** that we can use to **map values to keys**. So, just like an **object**, data is stored in **key value pairs** in maps.

Now, the big difference between **objects and maps** is that in **maps**, keys can have **any type** while in **object**, keys are basically always **string**.

```js
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
```

```js
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
```

We can even create a **map** from an object.

```js
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
```

Also, we can convert **map** to a **multi-dimensional array**.

```js
console.log([...question]);
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

# Constructor Functions and new Operator

```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

const maltida = new Person("Maltida", 2017);
const jack = new Person("Jack", 1975);
console.log(maltida, jack);

console.log(jonas instanceof Person); // true
```

<!-- prettier-ignore -->
> [!IMPORTANT]
> Arrow function will not work as constructor and never create a method inside the **constructor** as it may create performance issues. Instead we can use **prototype inheritance** to solve this problem.

# Prototypes

```js
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

Person.prototype.species = "Homo Sapiens";

jonas.calcAge();
console.log(jonas.species);
```

## Prototypal inheritance on Built In Object

```js
const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
```

# ES6 Classes

```js
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // method will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
jessica.calcAge();
jessica.greet();
```

```js
class Player {
  #score = 0; // # represents private field so not accessible outside class
  numlives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  status() {
    console.log(`Score: ${this.#score} Lives: ${this.numlives}`);
  }
}

const player1 = new Player("blue", "steele");
player1.status();

console.log(player1.numlives);
```

# Static Methods

```js
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

PersonCl.hey();
```

In **class** we can add static methods with the help of `static` keyword. These `static` methods are not available on the instances.

```js
const jonas = new PersonCl("Jonas", 1991);
jonas.hey(); // error
```

# Getters and Setters

```js
const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.latest);
```

Here, `get` and `set` are the **properties** not the method so we do not use `()` while calling **getter and setter** function. We can also use `get` and `set` in **ES6** classes too.

# Object.create

```js
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true
```

# Inheritance Between ES6 Classes

```js
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName}`);
  }
}

const martha = new StudentCl("Martha", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
```

# Timers, Set Timeout and Set Interval

`setTimeout` timer runs just **once** after a **defined time** while the `setInterval` timer **keeps** running basically forever until we **stop** it.

So, basically we can use `setTimeout` to **execute** some code at **some point** in the future.

```js
setTimeout(() => {
  console.log("Here is your pizza");
}, 3000); // execute the callback function after 3 sec

const pizza = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  "olives", // argument ing1
  "spinach", // argument ing2
);
```

```js
let ing2 = "spinach";

if (ing2 === "spinach") {
  clearTimeout(pizza); // cancels the queued setTimeout function called pizza
}
```

```js
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); // executes in every 1 sec

let time = 120;

const timer = setInterval(function () {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  console.log(`${min}:${sec}`);
  time--;
  if (time === 0) {
    clearInterval(timer); // removes the setinterval timer
  }
}, 1000);
```

# Promises and Fetch

A `Promise` is a proxy for a value not necessarily known when the **promise is created**. It allows us to associate handlers with an asynchronous action's eventual success value of failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value. The asynchronous method returns a promise to supply the value at some point in the future.

A `Promise` is in one of these states:

- **_pending:_** initial state, neither fulfilled nor rejected
- **_fulfilled:_** meaning that the operation was completed successfully
- **_rejected:_** meaning that the operation failed

```js
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Sorry", error));
```

```js
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 seconds passed");
  });
```

`Promise.all` takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill, with an array of the fulfillment values. It rejects when any of the input's promises reject, with the first rejection reason.

```js
const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

const get3Post = async function (p1, p2, p3) {
  try {
    const data = await Promise.all([
      getJSON(`https://jsonplaceholder.typicode.com/posts/${p1}`),
      getJSON(`https://jsonplaceholder.typicode.com/posts/${p2}`),
      getJSON(`https://jsonplaceholder.typicode.com/posts/${p3}`),
    ]);
    console.log(data.map((d) => d.title));
  } catch (err) {
    console.error(err);
  }
};

get3Post(1, 2, 3);
```

`Promise.race` takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles either fulfilled or rejected. If any of the promise **rejected** at first then it will settle with that rejected promise.

```js
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON("https://jsonplaceholder.typicode.com/posts/1"),
  timeout(5),
])
  .then((res) => console.log("Promise.race: ", res))
  .catch((err) => console.log(err));
```

`Promise.any` takes in an array of **multiple promises** and will return the **first** fulfilled promise and it will simply ignore the **rejected promises**. `Promise.any` is similar to `Promise.race` with a difference that rejected promises are ignored. So, the result of `Promise.any` is always going to be a fulfilled promise unless all of the promises reject.

# Asynchronous JavaScript

Most of the JavaScript code is **synchronous**. Synchronous code is executed **line by line**. Each line of code **waits** for previous line to finish. **Long** running operations block code execution.

**Asynchronous** code is executed in the **background**. Asynchronous code is non-blocking. Execution doesn't wait for an asynchronous task to finish its work. `async` and `await` is used for asynchronous task.

The `async` function run asynchronously in the background so `await` does not block the main thread of execution.

```js
const post = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
};

post();
```

# Script Tag Defer and Async

## Regular

```html
<head>
  .......
  <script src="script.js"></script>
</head>
```

```html
<body>
  .......
  <script src="script.js"></script>
</body>
```

```mermaid
%%{init: {'theme':'dark'}}%%
block-beta
  columns 4
  a["Parsing HTML"] space space b["Parsing HTML"]
  a--"Waiting"--->b
  space
  c["Fetch Script"] d["Execute"]
```

## Async in Head

```html
<head>
  .......
  <script async src="script.js"></script>
</head>
```

```mermaid
%%{init: {'theme':'dark'}}%%
block-beta
  columns 3
  a["Parsing HTML"] space b["Parsing HTML"]
  a--"Waiting"--->b
  c["Fetch Script"] d["Execute"]
```

## Defer in Head

```html
<head>
  .......
  <script defer src="script.js"></script>
</head>
```

```mermaid
%%{init: {'theme':'dark'}}%%
block-beta
  columns 3
  a["Parsing HTML"]:2 b["Execute"]
  c["Fetch Script"]
```

# Module Vs Script

|                       | ES6 Module              | Script      |
| --------------------- | ----------------------- | ----------- |
| **HTML Linking:**     | \<script type="module"> | \<script>   |
| **Variable:**         | Strict Mode             | Sloppy Mode |
| **Top-level This:**   | undefined               | window      |
| **Import/Export:**    | Yes                     | No          |
| **File Downloading:** | Asynchronous            | Synchronous |

# DOM Manipulation

```js
let data = document.querySelector(".message").textContent;
console.log(data);

document.querySelector(".header").textContent = "You're Welcome!";

document.querySelector(".check").addEventListener("click", function () {
  console.log("I am clicked");
});

addEventListener(event, function); // adds an event
removeEventListener(event, function); // removes an event
```

**DOM** stands for **Document Object Model** and it is basically a **structured representation of HTML document**. The **DOM** allows us to use **JavaScript to access HTML elements** and **styles** in order to manipulate them.

**for example:-** <br/>
We will be able to **change text**, **change HTML attributes** and also **change CSS styles** from our JavaScript.

So, **DOM** is basically a **connection point** between **HTML documents** and **JavaScript code**. **DOM** is automatically created by the browser as soon as the **HTML page loads**. And it is stored in a **tree structure**. In this tree, each **HTML element** is an object.

<!-- prettier-ignore -->
> [!NOTE]
> Most of us believe that the **DOM** and its methods and properties are actually **part of JavaScript**. However,this is **not the case**. **JavaScript** is actually just a dialect of the **ECMAScript specification**. The **DOM** and **its methods** are actually part of something called the **Web APIs**. So, the **Web APIs** are like libraries that **browsers** implement and that we can access from our **JavaScript code**. **Web APIs** are basically a libraries that are also written in **JavaScript** and are automatically available for **us to use**.

## Selecting DOM Elements

```js
console.log(document.documentElement);
document.head;
document.body;

document.querySelector(".header"); // returns the first element having header as a class
document.querySelectorAll(".nice"); // select all the elements having nice as a class
```

```js
document.getElementById("id");
document.getElementsByTagName("button");
document.getElementsByClassName("class");
```

Here, `getElementsByTagName` and `getElementsByClassName` will return an **array** of **HTML collections**. i.e. the list of array gets **updated** with any change in the elements in that array.

## Creating and Deleting DOM Elements

```js
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies to improve functionality. <button class='btn'> Got it! </button>";
```

We should **insert** this element manually to **DOM**.

```js
const header = document.querySelector(".header");

header.prepend(message); // adds message as first child of header
header.append(message); // adds message as last child of header
```

Here, **message** element is **not** shown at two place i.e. is **only** shown as last child. We should do `element.cloneNode(true)` to use the element in **multiple places**. This will **copy** all the child element and then create a **duplicate** element in **DOM**.

```js
header.append(message.cloneNode(true));
```

```js
message.remove(); // delete elements from the DOM
```

```js
const account = {
  movements: [200, -100, 340, -300, 50, 400, -150, 1300],
};

const displayMovements = function (movements) {
  movements.forEach((mov, i) => {
    const html = `
      <div class="movement_row">
        <div class="movement_type">${i + 1}</div>
        <div class="movements_value">${mov}</div>
      </div>
    `;
    document.querySelector(".product").insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account.movements);
```

## Styles, Attributes and Class

```js
message.style.backgroundColor = "#a0047d";
message.style.width = "100%";
```

Here, in this way **styles** are actually set as **inline styles**.

```js
console.log(getComputedStyle(message).backgroundColor); // to get the css style of elements

document.documentElement.style.setProperty("--color-primary", "orangered"); // declaring css variable
```

```js
message.setAttribute("org", "Owner"); // set attribute org with value Owner
console.log(message.getAttribute("org")); // to get the value of org attribute
```

```js
message.classList.add("message");
message.classList.remove("cookie-message");
message.classList.toggle("cookie-message");
console.log(message.classList.contains("cookie-message"));
```

```js
console.log(scrollX, scrollY); // give the current scroll position
console.log(window.scrollX, window.scrollY); // same as above
```

```js
console.log(
  document.documentElement.clientHeight,
  document.documentElement.clientWidth,
); // give the height and width of element
```

## DOM Traversing

**DOM Traversing** is basically walking through the DOM. It means that we can **select** an element based on **another** element. This is very important because sometimes we need to select an element **relative** to certain other element.

```js
const ul = document.querySelector("ul");

ul.querySelectorAll(".nav-link"); // go deeper to the nested children of ul and select element

ul.childNodes; // nodelists of direct children
ul.children; // HTML collections of direct children which is live updated

ul.firstElementChild;
ul.lastElementChild;

ul.firstChild;
ul.lastChild;

ul.parentNode;
ul.parentElement; // same as parentNode

ul.closest(".test").style.background = "var(--secondary-color)"; // traverses up the dom tree until it find ancestor element with provided selector

ul.previousElementSibling;
ul.nextElementSibling;

ul.previousSibling;
ul.nextSibling;
```

## Events Propagation

When we attach the **eventListener** to any element, then the **event** is in global scope of the **DOM**. Then, it **travels** down to the element where it is attached. And after **event** it **travels** along the parent element throughout the **DOM tree**.

When an **event** is triggered, it starts from the **root** of the DOM tree and then **moves** down towards the **target element**. By default **event handlers** are not executed in this phase. When the event **reaches** target element, the particular event attached to that element get executed. After that, event **traces back its path** and moves back up to the **root of DOM**. If **parent element** also have same **event** then, that too executes as **event** bubbles up toward root.

<!-- prettier-ignore -->
```html
<div>   -----------------------------
  <div>   ------------------         |
    <div></div>   ----3     |---2    |----1
  </div>  ------------------         |
</div>  -----------------------------
```

Here, if we attach a `click` event to all of the **_1_**, **_2_** and **_3_**, then the event will run on **all the three element** while clicking **element _3_** due to the **event bubbling**. First handler attached with **_3_** gets executed, then while **bubbling up** handler attached to **_2_** and **_1_** also gets executed.

We can stop this **flow of event** by using `event.stopPropagation()`.

```js
document.querySelector(".button").addEventListener("click", function (e) {
  this.style.backgroundColor = "rgb(255, 0, 0)";
  console.log("Button Clicked");
  e.stopPropagation();
});
```

It is not **recommended** to use `stopPropagation()` everywhere. Just use when it is highly required.

## Event Delegation

```js
document.querySelectorAll(".nav-link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("section");
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  });
});
```

This is the normal way of **attaching event**. But, the problem on doing this is that it is **not really efficient**. Here, we are adding a same **callback function** once to each of the element. It would be fine for **less number of elements** but what if we had **1,000 or 10,000** elements. If we attach event handler to **10,000** elements like this, then we would effectively be creating 10,000 **copies** of same function. And, it will certainly **impact the performance**.

The better **solution** for this is to use **event delegation**. So, in **event delegation** we basically add the **event listener** to a **common parent element** of all the elements that we are **interested in**.

```js
document.querySelector("ul").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("section");
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
});
```

Here, `event.target` is the HTML element that **triggered an event**.

## Implement Smooth Scrolling

```js
const lastSection = document.querySelector("#Reference");

const lastSectionCords = lastSection.getBoundingClientRect();
```

Here, `getBoundingClientRect` returns the **position** of element in the **DOM** with reference to the **viewport** and not to the top of webpage. **Viewport** refers to area of webpage that is **currently visible**. So, `getBoundingClientRect` returns the **distance** of element from **current visible area** therefore, we need to **add** the current scrollposition to that distance to scroll to that element. Now, we can derive **current scroll position** and then add it to the **viewport** coordinate to get the distance from the **top of the webpage** and not **from the viewport**.

```js
window.scrollTo({
  left: lastSectionCords.left + window.scrollX,
  top: lastSectionCords.top + window.scrollY,
  behavior: "smooth",
});
```

<!-- prettier-ignore -->
> [!IMPORTANT]
> This is a kind of the **old schoolway**. Here, we have **manually** calculate all these values and then **scroll** to that position. But there is a more modern way of doing this:-
> ```js
> lastSection.scrollIntoView({ behavior: "smooth" });
> ```

## Tabbed Component

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tab Navigation</title>
  </head>
  <body>
    <!-- Button container -->
    <div class="btn_container">
      <button class="btn" data-tab="1">Tab 1</button>
      <button class="btn" data-tab="2">Tab 2</button>
      <button class="btn" data-tab="3">Tab 3</button>
    </div>

    <!-- Content sections -->
    <div class="content content_active content_1">Content for Tab 1</div>
    <div class="content content_2">Content for Tab 2</div>
    <div class="content content_3">Content for Tab 3</div>
  </body>
</html>
```

```css
.btn_container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

/* Style for the buttons */
.btn {
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
}

/* Style for the active button */
.button_active {
  background-color: #007bff;
  color: white;
}

/* Style for the content sections */
.content {
  display: none;
  padding: 20px;
  border: 1px solid #ccc;
}

/* Style for the active content */
.content_active {
  display: block;
}
```

```js
const buttons = document.querySelectorAll(".btn");
const buttonContainer = document.querySelector(".btn_container");
const tabContent = document.querySelectorAll(".content");

buttonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest("button");
  console.log(clicked);

  if (!clicked) return;

  buttons.forEach((b) => b.classList.remove("button_active"));
  clicked.classList.add("button_active");

  tabContent.forEach((content) => content.classList.remove("content_active"));

  document
    .querySelector(`.content_${clicked.dataset.tab}`)
    .classList.add("content_active");
});
```

## Passing Arguments to Event Handler

Consider a scenario in web application where the content displayed to the user needs to **change** based on their interactions.

```js
let dynamicContent = "This is a dynamic content based on user actions.";

btn.addEventListener("click", doSomething(dynamicContent));

function doSomething(dynamicContent) {
  someElement.innerText = dynamicContent;
}
```

However, attempting to **directly** pass `dynamicContent` as an argument to event handler in this manner leads to stumbling block. This approach prematurely executes `doSomething` function upon the page's load rather than waiting for button click. When we append **parentheses** to a function name `doSomething()`, JavaScript interprets this as an instruction to execute the function **immediately**.

The **solution** to this problem lies in the strategic use of **anonymous function**.

```js
btn.addEventListener("click", function () {
  doSomething(dynamicContent);
});

btn.addEventListener("click", () => {
  doSomething(dynamicContent);
});
```

```js
let messages = {
  save: "Your work has been saved successfully.",
  delete: "The item has been deleted.",
  update: "Your changes have been updated.",
};

function updateMessage(action) {
  document.getElementById("messageDisplay").innerText = messages[action];
}

document
  .getElementById("saveButton")
  .addEventListener("click", () => updateMessage("save"));
document
  .getElementById("deleteButton")
  .addEventListener("click", () => updateMessage("delete"));
document
  .getElementById("updateButton")
  .addEventListener("click", () => updateMessage("update"));
```

## Intersection Observer

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sticky Navigation</title>
  </head>
  <body>
    <!-- Header section -->
    <div class="header">
      <h1>Welcome to My Website</h1>
      <p>Scroll down to see the sticky navigation bar.</p>
    </div>

    <!-- Navigation bar -->
    <nav class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <!-- Main content section -->
    <div class="content">
      <h2>Content Section</h2>
      <p>Some content here...</p>
    </div>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #f4f4f4;
  padding: 50px;
  text-align: center;
}

.nav {
  background-color: #333;
  padding: 15px;
  color: white;
  text-align: center;
  position: relative; /* Initially relative; becomes fixed when sticky */
  transition: all 0.3s;
}

.nav.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensures the nav stays above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.content {
  padding: 20px;
}

/* Just for demonstration: Add some height to the content */
.content {
  height: 2000px;
  background-color: #e2e2e2;
}
```

```js
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
```

## Revealing Elements on Scroll

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reveal Sections on Scroll</title>
  </head>
  <body>
    <!-- Sections to reveal on scroll -->
    <div class="section section-1">
      <h2>Section 1</h2>
      <p>This is the first section. It will be revealed as you scroll down.</p>
    </div>
    <div class="section section-2">
      <h2>Section 2</h2>
      <p>This is the second section. It will be revealed as you scroll down.</p>
    </div>
    <div class="section section-3">
      <h2>Section 3</h2>
      <p>This is the third section. It will be revealed as you scroll down.</p>
    </div>
    <div class="section section-4">
      <h2>Section 4</h2>
      <p>This is the fourth section. It will be revealed as you scroll down.</p>
    </div>
    <div class="section section-5">
      <h2>Section 5</h2>
      <p>This is the fourth section. It will be revealed as you scroll down.</p>
    </div>
    <div class="section section-6">
      <h2>Section 6</h2>
      <p>This is the fourth section. It will be revealed as you scroll down.</p>
    </div>
    <div class="section section-7">
      <h2>Section 7</h2>
      <p>This is the fourth section. It will be revealed as you scroll down.</p>
    </div>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.section {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  padding: 100px;
  margin: 50px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-hidden {
  opacity: 0;
  transform: translateY(50px); /* Initial state: hidden and translated */
}

.section-visible {
  opacity: 1;
  transform: translateY(0); /* Revealed state: visible and in place */
}
```

```js
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  // If the section is not intersecting, return
  if (!entry.isIntersecting) return;

  // Remove hidden class and add visible class
  entry.target.classList.remove("section-hidden");
  entry.target.classList.add("section-visible");

  // Stop observing the current section
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // Observe each section
  sectionObserver.observe(section);

  // Add hidden class initially
  section.classList.add("section-hidden");

  // Check if the section is already visible on page load and make it visible if it is
  if (section.getBoundingClientRect().top < window.innerHeight) {
    section.classList.remove("section-hidden");
    section.classList.add("section-visible");
    sectionObserver.unobserve(section);
  }
});
```

## Lazy Loading Images

```html
<img
  src="img/digigal-lazy.jpg"
  data-src="img/digital.jpg"
  alt="Computer"
  class="features_img lazy_img"
/>
```

```js
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));
```

## Building a Slider Component

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image Slider</title>
  </head>
  <body>
    <div class="slider">
      <button class="slider-btn-left">&#10094;</button>
      <div class="slide slide-1 slide-active">
        <img
          src="https://via.placeholder.com/800x300/FF5733/FFFFFF?text=Slide+1"
          alt="Slide 1"
        />
      </div>
      <div class="slide slide-2">
        <img
          src="https://via.placeholder.com/800x300/33FF57/FFFFFF?text=Slide+2"
          alt="Slide 2"
        />
      </div>
      <div class="slide slide-3">
        <img
          src="https://via.placeholder.com/800x300/3357FF/FFFFFF?text=Slide+3"
          alt="Slide 3"
        />
      </div>
      <div class="slide slide-4">
        <img
          src="https://via.placeholder.com/800x300/FF33A5/FFFFFF?text=Slide+4"
          alt="Slide 4"
        />
      </div>
      <button class="slider-btn-right">&#10095;</button>
    </div>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.slider {
  position: relative;
  width: 60%;
  height: 300px;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.slide-active {
  opacity: 1;
}

.slider-btn-left,
.slider-btn-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 1;
}

.slider-btn-left {
  left: 10px;
}

.slider-btn-right {
  right: 10px;
}
```

```js
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");

let curSlide = 0;
const maxSlide = slides.length;

const gotoSlide = function (slide) {
  slides.forEach((s, i) => {
    s.classList.remove("slide-active");
    if (i === slide) {
      s.classList.add("slide-active");
    }
  });
};

const nextSlide = function () {
  curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
  gotoSlide(curSlide);
};

const prevSlide = function () {
  curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
  gotoSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});
```

## Lifecycle DOM Events

```js
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built", e);
});
```

Another is **load** event. **Load event** is fired by the **window** as soon as not only the HTML is **parsed** but also all the **images and external resources like CSS files** are loaded. So, basically when the **complete page** has finished loading, then the **load event** will be fired.

```js
window.addEventListener("load", function (e) {
  console.log("Page fully loaded", e);
});
```

The `beforeunload` event is fired when the current window, contained document and associated resources are about to be unloaded. The main usecase for this event is to trigger a browser-generated **confirmation dialog** that asks user to confirm if they really want to leave the page when they try to **close or reload it, or navigate** somewhere else. This is intended to help **prevent** loss of unsaved data.

The dialog can be triggered by calling the event object's `preventDefault()` method.

```js
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log("You are trying to close the site", e);
});
```
