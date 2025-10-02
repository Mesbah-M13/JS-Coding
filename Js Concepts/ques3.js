// q3: Generate a random integer between 0 to 18


// random gives value from 0 to 1 [0,1) -> 0 inclusive, 1 exclusive
// so when we calculate [0,1) --> 0 * 18 =0 and 1*18 = 18 it will give number from 0 to 17
const start = 0;
const end = 2;

const randomInt = Math.trunc(Math.random() * (end + start + 1) + start);
console.log(randomInt);

// use Math.floor or Math.trunc ▶️ Removes the decimal part (no rounding)	Math.trunc(4.9) -	4