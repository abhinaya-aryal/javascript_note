let data = document.querySelector(".header").textContent;
console.log(data);

document.querySelector(".header").textContent = "You're Welcome!";

document.querySelector(".button").addEventListener("click", function () {
  console.log("I am clicked");
});

const account = {
  movements: [200, -100, 340, -300, 50, 400, -150, 1300],
};

const displayMovements = function (movements) {
  movements.forEach((mov, i) => {
    const html = `
      <div class="movement_row">
        <div class="movement_type">${i + 1}</div>
        <div class="movements">E${mov}</div>
      </div>
    `;
    document.querySelector(".product").insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account.movements);

const movementsUI = Array.from(document.querySelectorAll(".movements"), (el) =>
  Number(el.textContent.replace("E", " ")),
);
console.log(movementsUI); // [1300, -150, 400, 50, -300, 340, -100, 200]

const movementsUiWithSpread = [...document.querySelectorAll(".movements")].map(
  (el) => el.textContent.replace("E", "$"),
);
console.log(movementsUiWithSpread); // ['$1300', '$-150', '$400', '$50', '$-300', '$340', '$-100', '$200']

console.log(document.documentElement); // This will select an entire document
console.log(document.head);
console.log(document.body);

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies to improve functionality. <button class='btn'> Got it! </button>";

const header = document.querySelector(".header");

header.prepend(message);

const product = document.querySelector(".product");

product.prepend(message.cloneNode(true));

header.append(message.cloneNode(true));

message.style.backgroundColor = "#a0047d";
message.style.width = "100%";

console.log(getComputedStyle(message).backgroundColor); // to get the css style of elements

document.documentElement.style.setProperty("--color-primary", "orangered"); // declaring css variable

message.setAttribute("org", "Owner"); // set attribute org with value Owner
console.log(message.getAttribute("org")); // to get the value of org attribute

message.classList.add("message");
message.classList.remove("cookie-message");
message.classList.toggle("cookie-message");
console.log(message.classList.contains("cookie-message"));

console.log(scrollX, scrollY); // give the current scroll position
console.log(window.scrollX, window.scrollY); // same as above

console.log(
  document.documentElement.clientHeight,
  document.documentElement.clientWidth,
); // give the height and width of element

document.querySelector(".button").addEventListener("click", function (e) {
  this.style.backgroundColor = "rgb(255, 0, 0)";
  console.log("Button Clicked");
  e.stopPropagation();
});
