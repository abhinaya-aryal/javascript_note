let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2)); // ['c', 'd', 'e'] Returns a copy of a section of an array.
console.log(arr.slice(2, 4)); //['c', 'd'] here end index is exclusive
console.log(arr.slice(-1)); // ['e']

console.log(arr.splice(2)); // mutates original array too. remove and return ['c', 'd', 'e'] from original arr making it ['a', 'b'].
arr.splice(-1); // removes last element of an  arr
arr.splice(1, 2); // 2 elements will be removed starting from index 1

console.log(arr);

console.log(arr.reverse()); // It also mutates the original array making it ['e', 'd', 'c', 'b', 'a'];

const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array.flat()); // returns new array with all sub-array concatenated upto specified depth

const arrayDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrayDeep.flat(2));

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
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overBalance);

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

console.log(accounts.flatMap((acc) => acc.movements).sort((a, b) => a - b)); // ascending order
console.log(accounts.flatMap((acc) => acc.movements).sort((a, b) => b - a)); // descending order

const x = new Array(7); // Create an array with 7 empty elements

x.fill(1, 3, 5); // fills item 1 starting from index 3 and ends exclusively at index 5

x.fill(1); // fills all the elements with 1

const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7]

console.log(z);
