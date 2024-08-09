const students = [
  { name: "Francis", grade: 4 },
  { name: "Martin", grade: 5 },
  { name: "Martha", grade: 7 },
];

let allStudentsPassedTheCourse = students.every((student) => {
  return student.grade >= 6;
});

console.log(allStudentsPassedTheCourse);

let someStudentsPassedTheCourse = students.some((student) => {
  return student.grade >= 6;
});

console.log(someStudentsPassedTheCourse);
