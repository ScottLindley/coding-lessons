const prompt = require('./prompt');

async function main() {
  let answer = await prompt(`
  welcome to the jungle, today we will be at the creepiest jungle in the UNIVERSE!
  do you want to go left or right?`);

  if (answer === 'left') {
    console.log('you see a bird. then you get eaten by a lion that was behind you named jimpytipper');
    await pause(10000);
    console.log('💀 Game over!');
  } else if (answer === 'right') {
    answer = await prompt("you continue walking forward you see a book in front of you and a stone tablet behind you. do you want the tablet or the book?");
    if (answer === 'tablet') {
      console.log('you chose the tablet');
    } else if (answer === 'book') {
      console.log('you chose the book');
    } else {
      console.log('I do not understand...');
    }
  } else {
    return main();
  }

}

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

main().then(() => process.exit());