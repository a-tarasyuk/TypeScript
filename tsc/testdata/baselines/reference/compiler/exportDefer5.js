//// [tests/cases/compiler/exportDefer5.ts] ////

//// [a.ts]
export const a = 1;

//// [b.ts]
export defer { a } from "./a.ts";
export defer * as b from "./a.ts";


//// [a.js]
export const a = 1;
//// [b.js]
export defer { a } from "./a.js";
export defer * as b from "./a.js";


//// [a.d.ts]
export declare const a = 1;
//// [b.d.ts]
export defer { a } from "./a.ts";
export defer * as b from "./a.ts";
