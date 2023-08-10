// Revealing Compound Types in Typescript
// generic type which to improve typescript intellisense
// https://dev.to/kirkcodes/revealing-compound-types-in-typescript-2ic8
export type Spread<T> = { [K in keyof T]: T[K] };
