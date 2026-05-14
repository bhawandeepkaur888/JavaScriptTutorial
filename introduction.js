// introduction and setup

// what is javascript
// javascript is a high-level programming language 
// it is used to make websites interactive and dynamic

// where javascript is used
// 1. client side - in web browsers to make websites interactive
// 2. server side - using node.js
// 3. mobile apps, desktop apps, and games

// how to run javascript
// 1. browser console
// 2. inside html file (internal javascript)
// 3. external javascript file
// 4. using node.js

console.log("hello world");
console.log("welcome to javascript learning");


// variables in javascript

// 1. using var (old way of declaring variables)
var oldName = "old variable style";
console.log("using var :", oldName);

// 2. using let (modern and recommended)
let studentName = "Bhawandeep Kaur";
console.log("using let :", studentName);

// 3. using const (for values that never change)
const birthYear = 2000;
console.log("using const :", birthYear);


// rules for naming variables
// - must start with a letter, underscore (_) or dollar sign ($)
// - cannot start with a number
// - can contain letters, numbers, underscore and dollar sign
// - javascript is case sensitive (name and Name are different)
// - cannot use reserved keywords like let, const, var, function

let myAge = 24;
let _score = 95;
let $price = 299;
console.log("example of valid variable names :", myAge, _score, $price);


// difference between var, let and const

// var - can be redeclared and updated
var x = 10;
var x = 20;     // redeclaration allowed
x = 30;         // value can be updated
console.log("var example :", x);

// let - cannot be redeclared but can be updated
let y = 10;
// let y = 20;  // this will give error
y = 25;         // value can be updated
console.log("let example :", y);

// const - cannot be redeclared or updated
const z = 50;
// const z = 60; // error
// z = 70;       // error
console.log("const example :", z);


// hoisting in javascript
console.log("hoisted var value :", a);
var a = 100;

// let and const are not hoisted in the same way
// console.log(b); // this will give error
let b = 200;

console.log("basic javascript concepts completed successfully");
