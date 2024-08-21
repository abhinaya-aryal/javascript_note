const restaurant = {
  name: "Gourmet Bistro",
  location: "123 Flavor Street, Foodie Town",
  openingHours: {
    sun: {
      open: true,
    },
    mon: {
      open: true,
    },
    tue: {
      open: true,
    },
    wed: {
      open: true,
    },
    thu: {
      open: true,
    },
    fri: {
      open: true,
    },
    sat: {
      open: false,
    },
  },
};

const properties = Object.keys(restaurant); // property names
console.log(properties);

const values = Object.values(restaurant); // property values
console.log(values);

const entries = Object.entries(restaurant); // entire object
console.log(entries);
