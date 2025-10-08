// unions
// Narrowing
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else
        console.log(id);
}
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree('Bangladesh'));
console.log(getFirstThree([45, 50, 21, 90, 8, 11]));
