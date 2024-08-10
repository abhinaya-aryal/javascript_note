console.log("foo".repeat(3 * 10));

var word = "camera";
console.log(word.indexOf("era")); // 3

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
