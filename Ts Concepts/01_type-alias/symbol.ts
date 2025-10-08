const userId = Symbol('userId')

const user = {
  name:"Himel",
  [userId] : 1234,
}

console.log(user[userId]);
console.log(Object.keys(user));