// refactor to remove repeditive statements
// callback perhaps??? callback with new value?? 

/*
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
  process.stdout.write('\r\\   '); 
}, 700);
*/

// try to use array when interaing needing constand output. 
// remember to actually call function. 
// placement of \r in the write statement. 

const animateSpinner = function () {
  const lines = ["|", "/", "-", "\\"];
  let delay = 1000;
  for (let char of lines) {
    setTimeout(() => { process.stdout.write(`\r${char}`); }, delay);  
    
    delay += 200;

  }; 
};

animateSpinner();


