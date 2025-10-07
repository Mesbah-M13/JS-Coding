/* Create type alias

✅To create a type alias, we need to use the type keyword.

*/
var userInfo = {
    name: 'Himel',
    age: 30,
};
function login(userData) {
    return userData;
}
console.log(login({
    name: 'M. Himel',
    age: 30,
}));
var userId = 123;
console.log(typeof (userId));
