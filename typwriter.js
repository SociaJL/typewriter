const sentence = "Hello there from my cave \n"; // \n creates a new line after this string is printed. 

// loop through charactors 
/*
for (const char of sentence) {
  console.log(char); 
}; 
*/

/* returns 
H
e
l
l
o
 
t
h
e
r
e
 
f
r
o
m
 
m
y
 
c
a
v
e
*/

// this is because console.log prints a new line every iteration of a loop.
// can use process.stdout.write to write the output on a single line. 

/*
for (const char of sentence) {
  process.stdout.write(char); 
}; 
*/

// returns -- Hello there from my caveLevesques-MacBook-Pro:d2 cj2k$ 
// delay the display with setTimeout()
// this is done within the loop. setTimeout(() => {}, time in milliseconds); 
// to make the delay dynamic and not return every char withing string all at once...
//... declare a new variable and set the delay time. variable name += the interval increase amount. 

let delay = 1000 // this allows dynamic changed to the timing 
  for (const char of sentence) {
    setTimeout(() => { process.stdout.write(char); 
      
  }, delay); // time is set to var delay 

  delay += 50; // sets delay to increase by 50ms each iteration 
};  




