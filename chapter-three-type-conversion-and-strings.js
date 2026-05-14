// type conversion and strings in javascript

// type conversion
// converting one data type to another

// implicit conversion examples
// javascript automatically converts types in some operations
console.log("implicit conversion examples :");

let implicit1 = 5 + "10";
console.log("5 + '10' result :", implicit1);

let implicit2 = "10" - 5;
console.log("'10' - 5 result :", implicit2);

let implicit3 = true + 1;
console.log("true + 1 result :", implicit3);


// explicit conversion
// manual conversion using built-in functions

console.log("\nexplicit conversion examples :");

// using number()
console.log("number('25') :", Number("25"));
console.log("number('25.5') :", Number("25.5"));
console.log("number('abc') :", Number("abc"));

// using string()
console.log("string(100) :", String(100));
console.log("string(true) :", String(true));

// using boolean()
console.log("boolean(1) :", Boolean(1));
console.log("boolean(0) :", Boolean(0));
console.log("boolean('') :", Boolean(""));
console.log("boolean('hello') :", Boolean("hello"));


// parseint and parsefloat
// used to extract numbers from strings
console.log("\nparseint and parsefloat :");
console.log("parseint('25.78') :", parseInt("25.78"));
console.log("parsefloat('25.78') :", parseFloat("25.78"));
console.log("parseint('100px') :", parseInt("100px"));


// strings in javascript

// creating different types of strings
let studentName = "Bhawandeep Kaur";
let course = 'javascript basics';
let message = `welcome to learning javascript`;

console.log("\nstring examples :");
console.log("double quotes string :", studentName);
console.log("single quotes string :", course);
console.log("template literal :", message);


// string methods examples
console.log("\nstring methods :");

// length property
console.log("length of studentname :", studentName.length);

// case conversion
console.log("uppercase :", studentName.toUpperCase());
console.log("lowercase :", studentName.toLowerCase());

// trim removes whitespace
let textWithSpaces = "   hello world   ";
console.log("original with spaces :", textWithSpaces);
console.log("after trim :", textWithSpaces.trim());

// extracting parts of string
console.log("slice(0, 5) :", studentName.slice(0, 5));
console.log("substring(0, 5) :", studentName.substring(0, 5));

// replace text
console.log("replace kaur with singh :", studentName.replace("Kaur", "Singh"));

// split string into array
let skillsText = "HTML,CSS,JavaScript,React";
console.log("split by comma :", skillsText.split(","));

// template literals with variables
console.log("\ntemplate literal with variables :");
let projectsCompleted = 12;
console.log(`hi my name is ${studentName} and i have completed ${projectsCompleted} projects`);

console.log("\nall type conversion and string concepts demonstrated successfully");
