// @target: es2020
// @module: es2015, es2020, commonjs, nodenext
// @strict: true

// @filename: package.json
{ "type": "module" }

// @filename: a.ts
export const a = 1;

// @filename: b.ts
export defer { a } from "./a.js";
export defer * as b from "./a.js";
