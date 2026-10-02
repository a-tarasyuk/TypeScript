// @target: esnext
// @module: esnext
// @strict: true
// @declaration: true

// @filename: a.ts
export const a = 1;
export interface then {
    a: number;
}
export type * from "./b.js";

// @filename: b.ts
export const b = 1;

// @filename: c.ts
export const a = 1;
export interface then {
    a: number;
}

// @filename: d.ts
import defer * as a from "./a.js";
import defer * as b from "./c.js";
export type I = a.then;
export type J = b.then;
export const c = a;
export const d = b;
export const e = import.defer("./a.js");
export const f = import.defer("./c.js");
const g: number = a.a + b.a;
const h: keyof typeof a = "then";
const i: keyof typeof a = "b";
const j: keyof typeof b = "then";
a.then();
a.b;
b.then();
import.defer("./a.js").then(a => {
    const b: number = a.a;
    const c: keyof typeof a = "b";
    a.then();
    a.b;
});
import.defer("./c.js").then(a => {
    const b: number = a.a;
    a.then();
});
