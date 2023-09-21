// Sometimes we want to do something only if a certain condition is true. We can do this with an if statement.
let favoriteFood = 'pizza';
// This triple equals looks funny, but it is how we compare two values.
// It is different than the single equals sign we use to assign a value to a variable.
if (favoriteFood === 'pizza') {
  console.log('mmm cheese!');
} else {
  console.log('Your favorite food is ' + favoriteFood);
}
// We can also chain multiple if statements together with else if.
if (favoriteFood === 'pizza') {
  console.log('mmm cheese!');
} else if (favoriteFood === 'tacos') {
  console.log('mmm tacos!');
} else {
  console.log('Your favorite food is ' + favoriteFood);
}
