// q5: Find the maximum number in an array

const numArray = [34, 53, 3, 12, 56,444];
// using Math.max
// console.log(Math.max(...numArray)); // spread operator This "spreads" the array into individual elements:
// using reduce

const maxFromArr = numArray.reduce((prev, curr)=>
  prev > curr ? prev : curr
  )

  console.log(`Max num is --> ${maxFromArr}`);