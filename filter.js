const products = [
  { name: "Sony TV Sonico", category: "TV", number: 20 },
  { name: "LG TB Likee", category: "TV", number: 0 },
  { name: "Dell computer", category: "COM", number: 5 },
];

const result = products.filter((product) => {
  return product.category === "TV" && product.number > 0;
});

console.log(result);
