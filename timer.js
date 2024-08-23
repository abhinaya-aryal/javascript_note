setTimeout(() => {
  console.log("Here is your pizza");
}, 3000); // execute the callback function after 3 sec

const pizza = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  "olives", // argument ing1
  "spinach", // argument ing2
);

let ing2 = "spinach";

if (ing2 === "spinach") {
  clearTimeout(pizza); // cancels the queued setTimeout function called pizza
}

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); // executes in every 1 sec

let time = 120;

const timer = setInterval(function () {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  console.log(`${min}:${sec}`);
  time--;
  if (time === 0) {
    clearInterval(timer); // removes the setinterval timer
  }
}, 1000);
