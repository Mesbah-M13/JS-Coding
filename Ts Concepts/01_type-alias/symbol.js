var _a;
var userId = Symbol('userId');
var user = (_a = {
        name: "Himel"
    },
    _a[userId] = 1234,
    _a);
console.log(user[userId]);
console.log(Object.keys(user));
