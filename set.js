const orderSet = new Set(["Pasta", "Pizza", "Coffee", "Pizza"]);
console.log(orderSet);

console.log(orderSet.size); // 3

console.log(orderSet.has("Pizza")); // true

console.log(orderSet.add("Garlic Bread"));

orderSet.delete("Coffee");
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const uniqueStaffSet = new Set(staff);

const uniqueStaffArr = [...new Set(staff)];
