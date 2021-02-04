import { KeyType } from './KeyType';

export interface AccountType {
    getKey: () => KeyType
    makeDeposit: (amount: number) => boolean,
    checkBalance: () => number,
}