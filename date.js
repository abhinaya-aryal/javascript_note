const now = new Date(); // current date and time
console.log(now);

const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 ~ November as Jan starts from 0

console.log(Date.now()); // returns number of milliseconds elapsed since Jan 1, 1970

const day = `${now.getDate()}`.padStart(2, 0); // 22
const month = `${now.getMonth()}`.padStart(2, 0); // 07

console.log(now.toISOString()); // returns date as a string value in ISO format

const calcDaysPassed = (date1, date2) => {
  return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
};

const passedDays = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(passedDays); // 10
