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
