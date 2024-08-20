let data = document.querySelector(".header").textContent;
console.log(data);

document.querySelector(".header").textContent = "You're Welcome!";

document.querySelector(".check").addEventListener("click", function () {
  console.log("I am clicked");
});
