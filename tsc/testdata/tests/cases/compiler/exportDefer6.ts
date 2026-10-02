// @target: esnext
// @module: esnext
// @strict: true
// @declaration: true

// @filename: a.ts
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

// @filename: b.ts
export defer * as b from "./a.js";
export defer { then as c } from "./a.js";
export defer * as d from "./f.js";

// @filename: c.ts
import defer * as a from "./a.js";
export { a };
export const d = a;
export * from "./b.js";
export { b as e } from "./b.js";
export type I = a.I;
export type J = a.then;
export const f = import.defer("./a.js");
export const g = (await import("./b.js")).b;

// @filename: d.ts
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

// @filename: e.ts
export const b = 1;

// @filename: f.ts
export const a = 1;
export type * from "./a.js";
