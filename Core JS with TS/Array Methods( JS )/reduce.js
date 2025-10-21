// 1️⃣ Example 1 :  Shopping Total

const prices = [5, 3, 4, 2];

const total = prices.reduce((sum, price) => {
  console.log(`Current Total: ${sum} ; Adding:${price}`);
  return sum + price;
}, 0);

console.log(total);
