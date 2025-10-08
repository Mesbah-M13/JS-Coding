function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 20 }, { age: 30 }, { age: 40 }];
var players = [
    { name: "jp", age: 38 },
    { name: "ab", age: 42 },
    { name: "dk", age: 44 },
];
function gettheOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var playersInfo = [
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
var person = gettheOldest(playersInfo);
console.log(person);
