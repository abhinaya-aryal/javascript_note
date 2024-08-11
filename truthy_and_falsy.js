console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));

console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true

const money = 0;
if (money) {
  console.log("Don't spend");
} else {
  console.log("Get a job!");
}
