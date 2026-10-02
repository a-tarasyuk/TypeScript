// @target: esnext
// @module: esnext
// @allowJs: true
// @strict: true
// @noEmit: true

// @filename: a.ts
export const a = 1;

// @filename: b.ts
const a = 0;
export defer { a };
export defer { a as b } from "./c.js";
export defer { c } from "./a.js";

// @filename: d.js
const a = 0;
export defer { a };
export defer * from "./a.js";
export defer { a as b } from "./a.js";
export defer * as c from "./a.js";
a.toUpperCase();
