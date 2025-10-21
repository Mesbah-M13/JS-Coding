// Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values

const newArr = ['Dhaka',23, "Hi", 40,454, "Welcome", 34, "Bangladesh"];

// way 1
// let arrayWithStr =[]

// function checkArr(newArr) {
//   for( let i = 0 ; i< newArr.length ; i++){

//     if( typeof(newArr[i]) === 'string'){
//         arrayWithStr.push(newArr[i])
//     }
//     }
//     return arrayWithStr
//   }
// console.log(checkArr(newArr));

// way 2 🌟 Recomended
const filteredArray = newArr.filter((elem) => typeof elem === "string");

// console.log(filteredArray);

// wayy 3
const resultFilterArr = newArr.filter((ele) => {
  // if (typeof ele === "string") {
  //   return true;
  // }
  // return false;


  // shortcut way 
return typeof ele === 'string'
});


console.log(resultFilterArr);


// The .filter() method takes a callback function that returns a boolean for each element in the array. Here's what happens under the hood:

// It loops through each element in newArr.

// For each element, it runs your callback: typeof ele === "string" → returns true or false.

// If the result is true, .filter() includes that element in the new array.

// If the result is false, it excludes that element.

// So even though you're returning a boolean, .filter() uses that boolean to decide whether to keep the element.