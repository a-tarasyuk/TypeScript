// @module: commonjs, nodenext
// @target: esnext
// @noTypesAndSymbols: true

// @filename: a.cts
declare const obj: any;

with (obj) /* body */ export let a; // trailing
with (obj) export var b;
with (obj) export let c = 1;
with (obj) { export let d; }

// @filename: a.ts
export {};
declare const obj: any;

with (obj) export let a;
