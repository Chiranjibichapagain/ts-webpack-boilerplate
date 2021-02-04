
import { KeyType } from './interfaces/KeyType';
import { AccountType } from './interfaces/AccountType';

export class Database {
    accounts: AccountType[] = [];

    constructor(){}

    insert(account: AccountType): boolean {
        const foundDuplicate = this.find(account.getKey());
        if (Boolean(foundDuplicate)) return false;

        this.accounts.push(account);
        return true;
    }

    find(key: KeyType): AccountType | undefined {
        return this.accounts.find(account => account.getKey().equals(key))
    }

    delete(key: KeyType): boolean {
        const found = this.find(key);
        this.accounts = this.accounts.filter(account => !account.getKey().equals(key));
        return Boolean(found);
    }
}