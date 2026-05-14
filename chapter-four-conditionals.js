// Conditionals

// if statement
const age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// if-else and else-if
const score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// switch statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Mid-week day");
}

// Ternary Operator
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);
