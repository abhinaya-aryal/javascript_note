const artists = ["Clapton", "U2", "Bruno Mars", "Lamar"];

artists.forEach((artist) => {
  console.log(artist);
});

artists.forEach((name) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div>Hi, my name is ${name}.</div>`,
  );
});

const products = [
  { name: "Iphone", price: 200 },
  { name: "Motorala", price: 70 },
  { name: "Samsung", price: 150 },
  { name: "Sony", price: 98 },
];

let template = "";

products.forEach((product) => {
  function discount() {
    if (product.price < 100) {
      return `<span>On Sale!!</span>`;
    }
  }

  template += `
    <div class="product">
      <h1>${product.name} </h1}
      ${discount()}
      <strong>Price: $${product.price}</strong>
    </div>
  `;
});

document.body.insertAdjacentHTML("beforeend", template);
