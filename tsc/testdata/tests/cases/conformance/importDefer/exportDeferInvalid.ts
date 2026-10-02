// @target: es2015
// @module: esnext
// @filename: a.ts
export function f() {
  console.log("foo from a");
}

// @filename: b.ts
export defer * from "./a.js";
