const pricesInNum: number[] = [5, 3, 4, 2, 6];

const lastTotal: number = pricesInNum.reduce(
  (sum: number, price: number): number => {
    console.log(`Current Total: ${sum} ; Adding: ${price}`);
    return sum + price;
  },
  0
);

console.log(`Final result is : ${lastTotal}`);
