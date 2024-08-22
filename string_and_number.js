console.log("foo".repeat(3 * 10));

var word = "camera";
console.log(word.indexOf("era")); // 3
console.log(word.replace("am", "amam"));

console.log(word.startsWith("cam"));
console.log(word.startsWith("am", 1));

console.log(word.endsWith("era", 6));

console.log(word.includes("ame"));
console.log(word.includes("me", 2));

console.log(Number.isSafeInteger(200));
console.log(Number.isSafeInteger(0.022321));

console.log(Number.isInteger(200));
console.log(Number.isInteger(-5000));
console.log(Number.isInteger(0.022321));

console.log(Math.trunc(42.8));
console.log(Math.trunc(-10.1));

const plane = "A320A";
console.log(plane[1]);
console.log(plane.length);
console.log(plane.lastIndexOf("A"));

console.log(plane.slice(2)); // 20A

console.log(plane.slice(1, 3)); // 32

console.log(plane.toLowerCase());
console.log(plane.toUpperCase());

const priceGB = "288,97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
console.log(priceGB, priceUS);

console.log("a very nice string".split(" "));
console.log(["Hello", "world", "!!"].join(" "));

const message = "Go to gate 23!";
console.log(message.padStart(22, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64784473837));

console.log(0.1 + 0.2 === 0.3); // false
console.log(Number("23"));
console.log(+"23"); // 23

console.log(Number.parseInt("30px")); // 30
console.log(Number.parseInt("e32")); // Nan ; because always should start with integer in the string value
console.log(Number.parseInt("2.5rem")); // 2

console.log(Number.parseFloat("2.5rem")); // 2.5

console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20x")); // true

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
