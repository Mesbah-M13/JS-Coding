// Generics

function logger(arg: string) {
  console.log(arg);
  return arg;
}

logger("Log In");

function logAny<T>(arg: T): T {
  console.log(arg);
  return arg;
}

logAny([45, 3, 20]);

logAny(true);

interface HasAge {
  age: number;
}

function getOldest(people: HasAge[]): HasAge {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people = [{ age: 20 }, { age: 30 }, { age: 40 }];

interface Player{
  name:string;
  age:number;
}

const players : Player[]=[
  {name:'jp',age:38},{name:'ab',age:42},{name:'dk',age:44}
]

// const person:Player = getOldest(players);

// Assertion
const person:Player = getOldest(players) as Player;
console.log(person);