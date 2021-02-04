
import { KeyType } from './interfaces/KeyType';
import { AccountType } from './interfaces/AccountType';

export class BankAccount implements AccountType {
    balance: number;
    key: KeyType;

    constructor(balance: number, key: KeyType) {
        this.balance = balance;
        this.key = key;
    }

    makeDeposit(amount: number): boolean {
        if (amount < 0) return false;
        
        this.balance += amount;
        return true;
    }

    getKey(): KeyType {
        return this.key;
    }

    checkBalance(): number {
        return this.balance;
    }
}