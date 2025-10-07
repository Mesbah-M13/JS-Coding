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

type GreetMsgToPerson = (name: string) => string

function sayHi(name1:GreetMsgToPerson) {
  return `Hello ${name1('Himel')}`
}
const greet: GreetMsgToPerson = name => `${name}`
console.log(sayHi(greet));