//// [tests/cases/compiler/exportDefer8.ts] ////

//// [a.ts]
export const b = 1;
export function then() {
    return b;
}
export defer * as a from "./a.js";

//// [b.ts]
import { a } from "./a.js";
export const c = a;
export function f() {
    return a.a;
}
const d: number = a.a.a.b;
a.then();
a.a.a.then();


//// [a.js]
export const b = 1;
export function then() {
    return b;
}
export defer * as a from "./a.js";
//// [b.js]
import { a } from "./a.js";
export const c = a;
export function f() {
    return a.a;
}
const d = a.a.a.b;
a.then();
a.a.a.then();


//// [a.d.ts]
export declare const b = 1;
export declare function then(): number;
export defer * as a from "./a.js";
//// [b.d.ts]
import { a } from "./a.js";
export declare const c: typeof a.a;
export declare function f(): typeof a.a;
