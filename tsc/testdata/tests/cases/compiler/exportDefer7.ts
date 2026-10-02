// @target: esnext
// @module: esnext, commonjs
// @strict: true
// @noEmit: true

// @filename: a.d.ts
export let a: number;
export function then(): number;
export interface I {
    a: number;
}

// @filename: b.d.ts
export defer * as b from "./a.js";
export defer { then as c } from "./a.js";

// @filename: c.d.ts
import defer * as a from "./a.js";
export { a };
export * from "./b.js";
export declare const d: typeof a;

// @filename: d.ts
import * as a from "./a.js";
import { a as b, b as c, c as d, d as e } from "./c.js";
const f: number = a.then() + d() + b.a + c.a + e.a;
type I = c.I;
b.then();
c.then();
e.then();
