const lastSection = document.querySelector("#Reference");

const lastSectionCords = lastSection.getBoundingClientRect();
window.scrollTo({
  left: lastSectionCords.left + window.scrollX,
  top: lastSectionCords.top + window.scrollY,
  behavior: "smooth",
});

lastSection.scrollIntoView({ behavior: "smooth" });

console.log(scrollX, scrollY);
console.log(lastSectionCords);
