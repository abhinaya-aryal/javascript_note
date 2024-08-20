const friends = ["Michcael", "Steve", "Peter"];

let newLength = friends.push("Jay"); // add element at last position
console.log(friends, newLength);

newLength = friends.unshift("John"); // add element at first position
console.log(friends, newLength);
