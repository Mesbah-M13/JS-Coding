// Q1: Create a function that returns the last element of an Array

const myArr = [3, 5, 6, 75, 2,31];

function findLastElement(params) {
  const lastElem = params[params.length - 1];

  //return myArr.pop(); // it changes the array
  return lastElem
}

// function findLastElement(arr) {
//   let lastElem = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (i == arr.length - 1) {
//       lastElem = arr[i];
//       console.log(`last item is ${lastElem}`);
//     }
//   }
//   return lastElem;
// }
console.log(findLastElement(myArr));
