const value = (name, age) => {
  return `My name is ${name} and my age is ${age}.`;
};

console.log(value("Mathew", 22));

const cars = {
  brands: ["Ford", "Audi", "BMW"],
  category: "Sport car",
  message: function () {
    return this.brands.map((brand) => {
      console.log(`${brand} is a ${this.category}.`);
    });
  },
};

cars.message();
