console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2
console.log(8 ** 2); // 64

console.log(Math.max(5, 18, 23, 11)); // 23
console.log(Math.min(5, 18, "3", 26)); // 3

console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.159...

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(10, 20));

console.log(Math.round(23.3)); // 23

console.log(Math.ceil(23.3)); // 24

console.log(Math.floor(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23

console.log(Math.floor(-23.3)); // -24

console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.3752).toFixed(2)); // 2.38

console.log(5 % 2); // 1
