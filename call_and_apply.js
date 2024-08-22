const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

lufthansa.book(239, "Jonas Schmedtmann");
console.log(lufthansa);

const book = lufthansa.book;

book.call(eurowings, 23, "Sarah Williams"); // calls a method of an object substituting another object for current object
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const bookEW = book.bind(eurowings); // this keyword inside the function refer to provided object
const bookLH = book.bind(lufthansa);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

eurowings.planes = 10;
const bought = lufthansa.buyPlane.bind(eurowings);
bought();

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29
