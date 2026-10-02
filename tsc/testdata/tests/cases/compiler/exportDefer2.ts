// @target: esnext
// @module: esnext
// @strict: true
// @noEmit: true

// @filename: a.ts
export const a = 1;

// @filename: b.ts
const a = 0;
export defer { a };
export defer { a as b } from "./c.js";
export defer { c } from "./a.js";
