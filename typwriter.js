

// variable to created to give our function some data.
const sentence = "Hello there my beautiful daughter.";
// variable to start our initialDelay at 1000ms (1sec)
let initialDelay = 1000


// A for loop block is created to loop through our string
for (const char of sentence) {
  // a timeout function is declared to write each char in sentence with an initial delay of the variable "initialDelay"
  setTimeout(() => { process.stdout.write(char);}, initialDelay); 
// increases delay by 50ms each iteration by adding 50ms to previous value.
  initialDelay += 50; 

};






/// *** notes *** 

// process.stdout.write will keep the return on the same line
// where console.log will return each char on a new line 

/*
** setTimeout() syntax
var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = scope.setTimeout(function[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);
*/
