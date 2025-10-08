// Generics
function logger(arg) {
    console.log(arg);
    return arg;
}
logger("Log In");
function logAny(arg) {
    console.log(arg);
    return arg;
}
logAny([45, 3, 20]);
logAny(true);
function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 20 }, { age: 30 }, { age: 40 }];
var players = [
    { name: 'jp', age: 38 }, { name: 'ab', age: 42 }, { name: 'dk', age: 44 }
];
// const person:Player = getOldest(players);
var person = getOldest(players);
console.log(person);
