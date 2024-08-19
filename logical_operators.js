const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Able to drive");
} else {
  console.log("Unable to drive");
}

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Drive");
} else {
  console.log("Run away");
}
