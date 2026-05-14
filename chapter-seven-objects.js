// objects
// creating Objects
const person = {
  name: "Bhawan",
  project: 12,
  isStudent: false,

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// dot vs Bracket Notation
console.log(person.name);
console.log(person["project"]);

const key = "name";
console.log(person[key]);

// object Destructuring
const { name, age, isStudent } = person;
console.log(name, age);

// destructuring with default value
const { city = "Unknown" } = person;
console.log(city);

// this keyword
const user = {
  username: "john123",
  login() {
    console.log(`${this.username} has logged in`);
  },
};

user.login();
