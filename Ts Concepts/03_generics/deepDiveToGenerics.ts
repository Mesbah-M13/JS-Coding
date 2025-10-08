interface HasAge {
  age: number;
}

function getOldest(people: HasAge[]): HasAge {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people = [{ age: 20 }, { age: 30 }, { age: 40 }];

interface Player {
  name: string;
  age: number;
}

const players: Player[] = [
  { name: "jp", age: 38 },
  { name: "ab", age: 42 },
  { name: "dk", age: 44 },
];

// const person:Player = getOldest(players);

// Assertion
// const person:Player = getOldest(players) as Player;

// const person = getOldest(players) as Player
// console.log(person);

// using generics

interface HasAge {
  age: number;
}

function gettheOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const human: HasAge[] = [{ age: 20 }, { age: 30 }, { age: 40 }];


interface Player {
  name: string;
  age: number;
}

const playersInfo: Player[] = [
  {
    name: "ABD",
    age: 21,
  },
  {
    name: "JP",
    age: 30,
  },
  {
    name: "DK",
    age: 70,
  },
];

const person = gettheOldest(human)

console.log(person);