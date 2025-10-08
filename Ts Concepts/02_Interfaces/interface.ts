//  Type & Interfaces are some sort of shape of an object

interface Transaction {
  payerAccountNo : number;
  payeeAccountNo : number;

}

interface BankAccount {
  accountNo: number;
  accountHolder: string;
  balance: number;
  isActive:boolean;
  transactions: Transaction[]
}

const firstTransaction: Transaction={
  payerAccountNo: 4250,
  payeeAccountNo: 4548,
}
const secondTransaction: Transaction={
  payerAccountNo: 1190,
  payeeAccountNo: 9021,
}

const bankAccount : BankAccount = {
  accountNo: 1234,
  accountHolder: "M. Himel",
  balance:10000,
  isActive: true,
  transactions: [firstTransaction,secondTransaction]
}

console.log(bankAccount);