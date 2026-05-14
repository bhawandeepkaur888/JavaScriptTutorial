// primitive data types
// number
let completedProjects = 12;
console.log("number (completedProjects) :", completedProjects);
// bigint
let booksRead = 9876543210123456789n;
console.log("bigint (booksRead) :", booksRead);
// string
let studentName = "Bhawandeep Kaur";
console.log("string (studentName) :", studentName);
// boolean
let lovesJavaScript = true;
console.log("boolean (lovesJavaScript) :", lovesJavaScript);
// null
let mission = null;
console.log("null (mission) :", mission);
// undefined
let nextTutorial;
console.log("undefined (nextTutorial) :", nextTutorial);
// symbol
let uniqueStudentId = Symbol("student_id");
console.log("symbol (uniqueStudentId) :", uniqueStudentId);

// non primitive data types
// object
let developer = {
  name: "Bhawandeep Kaur",
  goal: "learning programming",
  learning: "JavaScript",
};
console.log("object (developer) :", developer);
// array
let skills = ["HTML", "CSS", "JavaScript", "React"];
console.log("array (skills) :", skills);
// function
function introduction() {
  return "Hi, I am Bhawandeep Kaur and my goal for 2026 is to learn programming.";
}
console.log("function (introduction) :", introduction());
// date object
let todayDate = new Date();
console.log("date (todayDate) :", todayDate);
// regular expression
let pattern = /javascript/i;
console.log("regular expression (pattern) :", pattern);
console.log("all data types demonstrated successfully");
