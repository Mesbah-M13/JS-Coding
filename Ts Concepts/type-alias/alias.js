/* Create type alias

✅To create a type alias, we need to use the type keyword.

*/
function sayHi(name1) {
    return "Hello ".concat(name1('Himel'));
}
var greet = function (name) { return "".concat(name); };
console.log(sayHi(greet));
