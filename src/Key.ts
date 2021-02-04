import { KeyType } from './interfaces/KeyType';

export class Key implements KeyType {
    numericalKey: number;

    constructor(num: number) {
        this.numericalKey = num;
    }

    equals(sample: KeyType): boolean {
        return sample.toNumber() === this.numericalKey;
    }

    toNumber(): number {
        return this.numericalKey;
    }
}




