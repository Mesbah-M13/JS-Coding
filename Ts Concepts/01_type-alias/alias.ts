/* Create type alias

✅To create a type alias, we need to use the type keyword.

*/

/*type AgeGroup = 'Child' | 'Youth' | 'Adult' | 'Old'

let age: number = 50
let group: AgeGroup

switch (true) {
  case age <= 12:
    group = 'Child'
    break
  case age <= 25:
    group = 'Youth'
    break
  case age <= 50:
    group = 'Adult'
    break
  default:
    group = 'Old'
}

console.log(group) // "Adult"
*/

// function type alias

/*
type GreetMsgToPerson = (name: string) => string

function sayHi(name1:GreetMsgToPerson) {
  return `Hello ${name1('Himel')}`
}
const greet: GreetMsgToPerson = name => `${name}`
console.log(sayHi(greet));
*/
type User={
  name: string,
  age:number,
  address ?: string,
}

const userInfo : User ={
  name: 'Himel',
  age : 30,
}

function login( userData : User ): User {
  return userData
}

console.log(login({
  name:'M. Himel',
  age:30,
}));

type ID = number | string // | --> pipe symbol is for union type

const userId: ID = 123;

console.log(typeof(userId));