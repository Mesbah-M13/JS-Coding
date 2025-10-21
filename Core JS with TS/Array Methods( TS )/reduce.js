var pricesInNum = [5, 3, 4, 2, 6];
var lastTotal = pricesInNum.reduce(function (sum, price) {
    console.log("Current Total: ".concat(sum, " ; Adding: ").concat(price));
    return sum + price;
}, 0);
console.log("Final result is : ".concat(lastTotal));
