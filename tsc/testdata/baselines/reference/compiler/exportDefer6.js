//// [tests/cases/compiler/exportDefer6.ts] ////

//// [a.ts]
export let a = 1;
export function then(): number {
    return a;
}
export interface then {
    a: number;
}
export interface I {
    a: number;
}
export type * from "./e.js";

//// [b.ts]
export defer * as b from "./a.js";
export defer { then as c } from "./a.js";
export defer * as d from "./f.js";

//// [c.ts]
import defer * as a from "./a.js";
export { a };
export const d = a;
export * from "./b.js";
export { b as e } from "./b.js";
export type I = a.I;
export type J = a.then;
export const f = import.defer("./a.js");
export const g = (await import("./b.js")).b;

//// [d.ts]
import * as a from "./a.js";
import { a as b, b as c, c as d, d as e, e as f } from "./c.js";
export const g: number = a.then() + d() + b.a + c.a + e.a + f.a;
export type I = c.I;
export type J = c.then;
b.then();
c.then();
e.then();
f.then();
b["then"]();
type K = typeof c.then;
const h: keyof typeof c = "then";
const i: typeof a = c;
import { d as j } from "./b.js";
const k: keyof typeof j = "then";
type L = j.then;
c.b;
import.defer("./a.js").then(a => {
    const b: number = a.a;
    a.then();
    a.b;
});

//// [e.ts]
export const b = 1;

//// [f.ts]
export const a = 1;
export type * from "./a.js";


//// [e.js]
export const b = 1;
//// [a.js]
export let a = 1;
export function then() {
    return a;
}
//// [f.js]
export const a = 1;
//// [b.js]
export defer * as b from "./a.js";
export defer { then as c } from "./a.js";
export defer * as d from "./f.js";
//// [c.js]
import defer * as a from "./a.js";
export { a };
export const d = a;
export * from "./b.js";
export { b as e } from "./b.js";
export const f = import.defer("./a.js");
export const g = (await import("./b.js")).b;
//// [d.js]
import * as a from "./a.js";
import { a as b, b as c, c as d, d as e, e as f } from "./c.js";
export const g = a.then() + d() + b.a + c.a + e.a + f.a;
b.then();
c.then();
e.then();
f.then();
b["then"]();
const h = "then";
const i = c;
const k = "then";
c.b;
import.defer("./a.js").then(a => {
    const b = a.a;
    a.then();
    a.b;
});


//// [e.d.ts]
export declare const b = 1;
//// [a.d.ts]
export declare let a: number;
export declare function then(): number;
export interface then {
    a: number;
}
export interface I {
    a: number;
}
export type * from "./e.js";
//// [f.d.ts]
export declare const a = 1;
export type * from "./a.js";
//// [b.d.ts]
export defer * as b from "./a.js";
export defer { then as c } from "./a.js";
export defer * as d from "./f.js";
//// [c.d.ts]
import defer * as a from "./a.js";
export { a };
export declare const d: typeof a;
export * from "./b.js";
export { b as e } from "./b.js";
export type I = a.I;
export type J = a.then;
export declare const f: Promise<{
    a: number;
}>;
export declare const g: typeof import("./b.js").b;
//// [d.d.ts]
import { b as c } from "./c.js";
export declare const g: number;
export type I = c.I;
export type J = c.then;
