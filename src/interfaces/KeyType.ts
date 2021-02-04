export interface KeyType {
    equals: (sample: KeyType) => boolean,
    toNumber: () => number
}