//// [tests/cases/compiler/exportDefer9.ts] ////

//// [a.ts]
export const a = 1;
export interface then {
    a: number;
}
export type * from "./b.js";

//// [b.ts]
export const b = 1;

//// [c.ts]
export const a = 1;
export interface then {
    a: number;
}

//// [d.ts]
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


//// [b.js]
export const b = 1;
//// [a.js]
export const a = 1;
//// [c.js]
export const a = 1;
//// [d.js]
import defer * as a from "./a.js";
import defer * as b from "./c.js";
export const c = a;
export const d = b;
export const e = import.defer("./a.js");
export const f = import.defer("./c.js");
const g = a.a + b.a;
const h = "then";
const i = "b";
const j = "then";
a.then();
a.b;
b.then();
import.defer("./a.js").then(a => {
    const b = a.a;
    const c = "b";
    a.then();
    a.b;
});
import.defer("./c.js").then(a => {
    const b = a.a;
    a.then();
});


//// [b.d.ts]
export declare const b = 1;
//// [a.d.ts]
export declare const a = 1;
export interface then {
    a: number;
}
export type * from "./b.js";
//// [c.d.ts]
export declare const a = 1;
export interface then {
    a: number;
}
//// [d.d.ts]
import defer * as a from "./a.js";
import defer * as b from "./c.js";
export type I = a.then;
export type J = b.then;
export declare const c: typeof a;
export declare const d: typeof b;
export declare const e: Promise<{
    readonly a: 1;
}>;
export declare const f: Promise<typeof b>;
