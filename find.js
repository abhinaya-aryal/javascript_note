const brands = [
  { name: "Apple", id: 1 },
  { name: "HP", id: 2 },
  { name: "Apple", id: 3 },
];

const result = brands.find((brand) => {
  return brand.id === 3;
});

console.log(result);
