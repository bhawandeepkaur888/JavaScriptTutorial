// operators in javascript

// arithmetic operators
// used for basic mathematical calculations

let a = 20;
let b = 5;

console.log("addition :", a + b);
console.log("subtraction :", a - b);
console.log("multiplication :", a * b);
console.log("division :", a / b);
console.log("modulus (remainder) :", a % b);
console.log("exponentiation :", a ** b);


// assignment operators
// used to assign and update values in variables

let x = 10;
console.log("simple assignment x :", x);

x += 5;
console.log("after x += 5 :", x);

x -= 3;
console.log("after x -= 3 :", x);

x *= 2;
console.log("after x *= 2 :", x);

x /= 4;
console.log("after x /= 4 :", x);

x %= 3;
console.log("after x %= 3 :", x);


// comparison operators
// used to compare two values and return true or false

let p = 10;
let q = "10";
let r = 5;

console.log("equal (==) :", p == q);
console.log("strict equal (===) :", p === q);
console.log("not equal (!=) :", p != r);
console.log("strict not equal (!==) :", p !== q);
console.log("greater than (>) :", p > r);
console.log("less than (<) :", r < p);
console.log("greater than or equal (>=) :", p >= 10);
console.log("less than or equal (<=) :", r <= 5);


// logical operators
// used to combine multiple conditions

let isStudent = true;
let hasCompletedProjects = true;
let lovesProgramming = false;

console.log("and operator (&&) :", isStudent && hasCompletedProjects);
console.log("or operator (||) :", isStudent || lovesProgramming);
console.log("not operator (!) :", !lovesProgramming);


// practical example using logical operators
let age = 22;
let hasCertificate = true;

if (age >= 18 && hasCertificate) {
  console.log("eligible for job");
} else {
  console.log("not eligible");
}


// typeof operator
// used to find the data type of any value

console.log("type of string :", typeof "Bhawandeep Kaur");
console.log("type of number :", typeof 12);
console.log("type of boolean :", typeof true);
console.log("type of bigint :", typeof 9876543210123456789n);
console.log("type of undefined :", typeof undefined);
console.log("type of null :", typeof null);
console.log("type of object :", typeof {name: "Bhawandeep Kaur"});
console.log("type of function :", typeof function(){});

console.log("all operators demonstrated successfully");
