function main() {
  console.log("1st log");
  console.log("2nd log");
  console.log("3rd log");
  console.log("4th log");
  // this is synchronous execution & single thread machanism
}
// main()

function checkInventory() {
  console.log("Checking inventory 🔄️");
}

function createOrder() {
  console.log("Creating an order 🏗️");
}

function chargePayment() {
  console.log("Charging the payment.... 💸");
}

function sendInvoice() {
  console.log("Sending the invoice.... 👍");
}

function result() {
  checkInventory();
  createOrder();
  chargePayment();
  sendInvoice();

  // this is synchronous execution & single thread machanism
}
// result()

/*
Synchronous execution এ main thread block হয়ে যায়। যেহেতু thead at a time
১টা console.log/task perform করতেছে। তার জন্য আমাদের সব সময় thread offload/খালি
রাখার ব্যবস্থা করতে হয় যাতে যে কাজ করার প্রয়োজন তা thread এর বাইরে করা যায়।

এজন্য প্রয়োজন হয় asynchronous execution এর
 
network call/ asynchronous I/O --> db call, disk read , fs call
*/

/*
*** কোন কিছুকে asynchronous করার সহজ উপায় হলো timer use করা।
  - setTimeout
*/

function checkInventory() {
  setTimeout(() => {
    console.log("Checking inventory . 🔄️");
  }, 3000);
}

function createOrder() {
  setTimeout(() => {
    console.log("Creating an order .. 🏗️");
  }, 2000);
}

function chargePayment() {
  setTimeout(() => {
    console.log("Charging the payment ... 💸");
  }, 1000);
}

function sendInvoice() {
  setTimeout(() => {
    console.log("Sending the invoice .... 👍");
  }, 1000);
}

function asyncRsult() {
  checkInventory();
  createOrder();
  chargePayment();
  sendInvoice();
  console.log('Other request processing as nothing has blocked');
}

asyncRsult()