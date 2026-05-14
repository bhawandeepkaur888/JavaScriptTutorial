// Arrays

// creating arrays
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "text", true, null];

// array Methods
const arr = [1, 2, 3, 4, 5];

arr.push(6);                    // Add to end
arr.pop();                      // Remove from end
arr.unshift(0);                 // Add to beginning
arr.shift();                    // Remove from beginning

// important Methods
const doubled = arr.map(n => n * 2);
const evens = arr.filter(n => n % 2 === 0);
const sum = arr.reduce((acc, n) => acc + n, 0);

arr.forEach((item, index) => console.log(index, item));

const found = arr.find(n => n > 3);

// array Iteration
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
