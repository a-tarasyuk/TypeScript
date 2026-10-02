// @target: esnext
// @module: esnext
// @strict: true
// @declaration: true
// @rewriteRelativeImportExtensions: true

// @filename: a.ts
export const a = 1;

// @filename: b.ts
export defer { a } from "./a.ts";
export defer * as b from "./a.ts";
