const lower = 0;
const upper = 300;
const step = 20;

console.log(`  F\t  C\n`);
let fahr = lower;
while (fahr <= upper) {
  let celsius = (5 * (fahr - 32)) / 9;
  console.log(`  ${fahr}\t ${celsius.toFixed(2)}\n`);
  fahr += step;
}

console.log(`\n\nF\t  C\n`);
for (fahr = 0; fahr <= 300; fahr = fahr + step) {
  console.log(`${fahr}\t ${((5 / 9) * (fahr - 32)).toFixed(2)}\n`);
}
