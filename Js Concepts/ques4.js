// Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values

const newArr = [23, "Hi", 40, "Welcome", 34, "Bangladesh"];

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
  if (typeof ele === "string") {
    return true;
  }
  return false;
});
console.log(resultFilterArr);