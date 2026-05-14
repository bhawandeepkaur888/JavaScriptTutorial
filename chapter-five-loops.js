// Loops

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`For Loop: ${i}`);
}

// while loop
let count = 0;
while (count < 5) {
    console.log(`While Loop: ${count}`);
    count++;
}

// do-while loop
let num = 10;
do {
    console.log(`Do-While: ${num}`);
    num++;
} while (num < 5);

// for...of loop
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in loop
const person = { name: "Alice", age: 25 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;
    if (i === 7) break;
    console.log(i);
}
