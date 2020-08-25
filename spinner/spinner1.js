// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// returns heyyy from spinner1.js...

// using \r, we can fake an animation by replacing characters in the same spot after a delay.

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);
