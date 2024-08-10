const brands = ["Ford", "Nissan"];
const otherBrand = ["Audi", "BMW"];

const newArray = [...brands, ...otherBrand];

console.log(newArray);

function showItems(arg1, ...arg2) {
  let arr = [...arg1, ...arg2];
  console.log(arr);
}

showItems(["dog", "cat"], "turtles", "sharks");
