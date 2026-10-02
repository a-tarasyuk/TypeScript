// @target: esnext
// @module: esnext
// @allowJs: true
// @checkJs: true
// @strict: true
// @noEmit: true

// @filename: a.js
export const a = 1;
export function then() {
    return a;
}

// @filename: b.js
export defer { a } from "./a.js";
export defer * as b from "./a.js";

// @filename: c.js
import { a, b } from "./b.js";
a.toUpperCase();
b.a = "a";
b.c();
b.then();
