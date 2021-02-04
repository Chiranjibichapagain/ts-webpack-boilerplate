import { BankAccount } from "./BankAccount";
import { Database } from "./DB";
import { Key } from "./Key";

let db = new Database();

let firstKey = new Key(12345);
let secondKey = new Key(234354);
let thirdKey = new Key(456);

let firstAccount = new BankAccount(5000, firstKey)
let secondAccount = new BankAccount(10000, secondKey)

let firstResult = db.insert(firstAccount);
let secondResult = db.insert(secondAccount);

console.log('Check first entry', firstResult);
console.log('Check Seconentry', secondResult);


let found = db.find(thirdKey);
console.log('Account lookup by unregistered key', found)

found = db.find(secondKey);
console.log('Account lookup width second key', found);

let deletionStatus = db.delete(thirdKey);
console.log('Try deleting an account with unregistered key', deletionStatus);

deletionStatus = db.delete(secondKey);
console.log('Try deleting an account with secondKey', deletionStatus);

found = db.find(secondKey);
console.log('Account lookup after deleting', found);