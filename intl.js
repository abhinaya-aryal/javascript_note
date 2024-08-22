const now = new Date();
console.log(new Intl.DateTimeFormat("en-NP").format(now)); // 8/22/2024
console.log(new Intl.DateTimeFormat("ne-NP").format(now)); // २०२४-०८-२२

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

date = new Intl.DateTimeFormat("ne-NP", options).format(now);
console.log(date); // २०२४ अगस्ट २२, बिहिबार: १७:४६

const locale = navigator.language;
console.log(locale);

date = new Intl.DateTimeFormat(locale, options).format(now);
console.log(date);

const num = 3884764.23;
console.log(new Intl.NumberFormat("ne-NP").format(num)); // ३८,८४,७६४.२३

const currency = new Intl.NumberFormat("ne-NP", {
  style: "currency",
  currency: "NPR",
}).format(34343);
console.log(currency); // नेरू ३४,३४३.००
