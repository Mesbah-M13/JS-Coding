// Q1: Create a function that returns the last element of an Array

const myArr = [3, 5, 6, 75, 2];

function findLastElement(params) {
  const lastElem = params[params.length - 1]
  console.log(lastElem);
}

// function findLast(arr) {
//   let lastElem = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (i == arr.length - 1) {
//       lastElem = arr[i];
//       console.log(`last item is ${lastElem}`);
//     }
//   }
//   return lastElem;
// }
findLastElement(myArr);
