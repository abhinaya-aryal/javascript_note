console.log(3 || "JONAS");

console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || "" || "" || "Hello" || 23 || null); // Hello

console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // Jonas
