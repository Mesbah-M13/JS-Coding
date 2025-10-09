// Generics

function logger(arg: string):string {
  console.log(arg);
  return arg;
}

logger("Log In");

// function logAny<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }

// logAny([45, 3, 20]);

// logAny(true);

