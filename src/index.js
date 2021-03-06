"use strict";
exports.__esModule = true;
var BankAccount_1 = require("./BankAccount");
var DB_1 = require("./DB");
var Key_1 = require("./Key");
var db = new DB_1.Database();
var firstKey = new Key_1.Key(12345);
var firstAccount = new BankAccount_1.BankAccount(5000, firstKey);
var firstResult = db.insert(firstAccount);
var secondKey = new Key_1.Key(234354);
var secondAccount = new BankAccount_1.BankAccount(10000, secondKey);
var secondResult = db.insert(secondAccount);
console.log('Added first account to the DB', firstResult);
console.log('Added second account to the DB', secondResult);
var thirdKey = new Key_1.Key(456);
var found = db.find(thirdKey);
console.log('Account lookup', found);
found = db.find(secondKey);
console.log('Account lookup', found);
var deletionStatus = db["delete"](thirdKey);
console.log('Try deleting an account with thirdkey', deletionStatus);
deletionStatus = db["delete"](secondKey);
console.log('Try deleting an account with secondKey', deletionStatus);
found = db.find(secondKey);
console.log('Account lookup', found);
