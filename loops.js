// Loops are way to run a block of code multiple times
// There are different types of loops

// This says: "Run this block of code 10 times"
// The "i" variable is incremented by 1 each time the loop runs
// The loop will run as long as "i" is less than 10
// The loop will stop when "i" is equal to 10
for (let i = 0; i < 10; i++) {
  // We can put anything here inside the loop.
  // This will print the value of "i" to the console each time the loop runs.
  console.log('For loop!', i);
}

// A while loop will run as long as the condition is true
// This says: "Run this block of code while "i" is less than 10"
let i = 0;
while (i < 10) {
  // We can put anything here inside the loop.
  // This will print the value of "i" to the console each time the loop runs.
  console.log('While loop!', i);
  // We need to increment "i" or the loop will run forever
  i = i + 1;
}

while (true) {
  // This will run forever because the condition is always true
  console.log('This will run forever!');
}
