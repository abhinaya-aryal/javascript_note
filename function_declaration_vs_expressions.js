const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
console.log(age1);

const caclcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = caclcAge2(1991);
console.log(age2);
