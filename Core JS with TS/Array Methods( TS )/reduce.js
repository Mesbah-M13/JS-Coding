// 1️⃣ Example 1 :  Shopping Total
var pricesInNum = [5, 3, 4, 2, 6];
var lastTotal = pricesInNum.reduce(function (sum, price) {
    // console.log(`Current Total: ${sum} ; Adding: ${price}`);
    return sum + price;
}, 0);
// console.log(`Final result is : ${lastTotal}`);
// 2️⃣ Example 2 : Counting Items in Shopping Cart
var cart = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
];
var itemCount = cart.reduce(function (count, item) {
    count[item] = (count[item] || 0) + 1;
    return count;
}, {});
console.log("Final result is :", itemCount);
