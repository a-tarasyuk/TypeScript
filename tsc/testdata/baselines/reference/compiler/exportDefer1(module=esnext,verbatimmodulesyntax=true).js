//// [tests/cases/compiler/exportDefer1.ts] ////

//// [a.ts]
export const a = 1;
export function f(a: string): number {
    return a.length;
}
export interface I {
    a: number;
}
export default a;

//// [b.ts]
export defer { a, f as g, default as b, type I } from "./a.js";
export defer * as c from "./a.js";
export defer { a as "d-e" } from "./a.js";
export defer {} from "./a.js";
export
defer
{ a as h } from "./a.js" with { type: "javascript" };

//// [c.ts]
export * from "./b.js";

//// [d.ts]
import { a, b, c, g, h, "d-e" as d, type I } from "./c.js";
export const e: I = { a };
export const f: number = g("a") + b + c.a + d + h;
export type J = c.I;


//// [a.js]
export const a = 1;
export function f(a) {
    return a.length;
}
export default a;
//// [b.js]
export defer { a, f as g, default as b } from "./a.js";
export defer * as c from "./a.js";
export defer { a as "d-e" } from "./a.js";
export defer {} from "./a.js";
export defer { a as h } from "./a.js" with { type: "javascript" };
//// [c.js]
export * from "./b.js";
//// [d.js]
import { a, b, c, g, h, "d-e" as d } from "./c.js";
export const e = { a };
export const f = g("a") + b + c.a + d + h;


//// [a.d.ts]
export declare const a = 1;
export declare function f(a: string): number;
export interface I {
    a: number;
}
export default a;
//// [b.d.ts]
export defer { a, f as g, default as b, type I } from "./a.js";
export defer * as c from "./a.js";
export defer { a as "d-e" } from "./a.js";
export defer {} from "./a.js";
export defer { a as h } from "./a.js" with { type: "javascript" };
//// [c.d.ts]
export * from "./b.js";
//// [d.d.ts]
import { c, type I } from "./c.js";
export declare const e: I;
export declare const f: number;
export type J = c.I;
