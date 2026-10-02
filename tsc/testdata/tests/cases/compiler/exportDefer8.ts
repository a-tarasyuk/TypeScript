// @target: esnext
// @module: esnext
// @strict: true
// @declaration: true

// @filename: a.ts
export const b = 1;
export function then() {
    return b;
}
export defer * as a from "./a.js";

// @filename: b.ts
import { a } from "./a.js";
export const c = a;
export function f() {
    return a.a;
}
const d: number = a.a.a.b;
a.then();
a.a.a.then();
