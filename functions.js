// A function is a block of code that can be re-used.
function myFunction() {
  // This is the code that will run when the function is called
  console.log('This is my function!');
}

// This is how you call a function
myFunction();

// Functions can take arguments, as many as you want
function add(a, b) {
  // This function adds two numbers together
  return a + b;
}

// We can call the function with two arguments
const sum = add(1, 2);
console.log('sum', sum);

// Functions can also be written as "arrow functions"
// The syntax is a little different, but they work the same way
const multiply = (a, b) => {
  // This function multiplies two numbers together
  return a * b;
}

const product = multiply(2, 3);
console.log('product', product);

// Let's try to call a function in a loop
// This will print "This is my function!" 10 times
for (let i = 0; i < 10; i++) {
  myFunction();
}
