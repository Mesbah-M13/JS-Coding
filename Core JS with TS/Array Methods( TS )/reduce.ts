// 1️⃣ Example 1 :  Shopping Total

const pricesInNum: number[] = [5, 3, 4, 2, 6];

const lastTotal: number = pricesInNum.reduce(
  (sum: number, price: number): number => {
    // console.log(`Current Total: ${sum} ; Adding: ${price}`);
    return sum + price;
  },
  0
);

// console.log(`Final result is : ${lastTotal}`);

// 2️⃣ Example 2 : Counting Items in Shopping Cart

const cart: string[] = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
];

const itemCount: Record<string, number> = cart.reduce(
  (count: Record<string, number>, item: string) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  },
  {}
);

console.log(`Final result is :`, itemCount);
