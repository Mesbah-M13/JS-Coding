//  Function that returns the length of a given object

const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
console.log(Object.keys(person)[2]);

console.log(Object.values(person));

// 🔍 Why it works:

// Object.keys(obj) returns an array of the object's own enumerable property names.

// .length then gives you the number of keys.

// 🧠 Bonus: Other related methods

// Object.values(obj) → array of values

// Object.entries(obj) → array of [key, value] pairs

// Want to count nested keys or filter by type next?