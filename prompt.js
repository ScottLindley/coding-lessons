
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// A utility function to prompt the user for input
const prompt = (query) => new Promise((resolve) => rl.question(query + '\n> ', resolve));

module.exports = prompt;
