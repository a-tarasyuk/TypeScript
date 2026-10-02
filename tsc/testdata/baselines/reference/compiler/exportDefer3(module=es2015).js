//// [tests/cases/compiler/exportDefer3.ts] ////

//// [package.json]
{ "type": "module" }

//// [a.ts]
export const a = 1;

//// [b.ts]
export defer { a } from "./a.js";
export defer * as b from "./a.js";


//// [a.js]
export const a = 1;
//// [b.js]
export defer { a } from "./a.js";
import * as b_1 from "./a.js";
export { b_1 as b };
