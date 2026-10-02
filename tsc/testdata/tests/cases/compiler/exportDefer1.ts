// @target: esnext
// @module: esnext, preserve
// @strict: true
// @declaration: true
// @verbatimModuleSyntax: true, false

// @filename: a.ts
export const a = 1;
export function f(a: string): number {
    return a.length;
}
export interface I {
    a: number;
}
export default a;

// @filename: b.ts
export defer { a, f as g, default as b, type I } from "./a.js";
export defer * as c from "./a.js";
export defer { a as "d-e" } from "./a.js";
export defer {} from "./a.js";
export
defer
{ a as h } from "./a.js" with { type: "javascript" };

// @filename: c.ts
export * from "./b.js";

// @filename: d.ts
import { a, b, c, g, h, "d-e" as d, type I } from "./c.js";
export const e: I = { a };
export const f: number = g("a") + b + c.a + d + h;
export type J = c.I;
