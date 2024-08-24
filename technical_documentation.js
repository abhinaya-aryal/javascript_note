const lastSection = document.querySelector("#Reference");

const lastSectionCords = lastSection.getBoundingClientRect();
/* window.scrollTo({
  left: lastSectionCords.left + window.scrollX,
  top: lastSectionCords.top + window.scrollY,
  behavior: "smooth",
}); */

// lastSection.scrollIntoView({ behavior: "smooth" });

console.log(scrollX, scrollY);
console.log(lastSectionCords);

/* document.querySelectorAll(".nav-link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("section");
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  });
}); */

document.querySelector("ul").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("section");
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
});

const ul = document.querySelector("ul");

ul.querySelectorAll(".nav-link"); // go deeper to the nested children of header and select element

ul.childNodes; // nodelists of direct children
ul.children; // HTML collections of direct children which is live updated

ul.firstElementChild;
ul.lastElementChild;

ul.firstChild;
ul.lastChild;

ul.parentNode;
ul.parentElement; // same as parentNode

document.documentElement.style.setProperty("--secondary-color", "orangered");
ul.closest(".test").style.background = "var(--secondary-color)"; // traverses up the dom tree until it find ancestor element with provided selector

ul.previousElementSibling;
ul.nextElementSibling;

ul.previousSibling;
ul.nextSibling;

console.log(ul.previousElementSibling);
