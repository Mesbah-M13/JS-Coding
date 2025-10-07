//  Type & Interfaces are some sort of shape of an object
var firstTransaction = {
    payerAccountNo: 4250,
    payeeAccountNo: 4548,
};
var secondTransaction = {
    payerAccountNo: 1190,
    payeeAccountNo: 9021,
};
var bankAccount = {
    accountNo: 1234,
    accountHolder: "M. Himel",
    balance: 10000,
    isActive: true,
    transactions: [firstTransaction, secondTransaction]
};
console.log(bankAccount);
