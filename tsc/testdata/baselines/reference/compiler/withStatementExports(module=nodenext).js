//// [tests/cases/compiler/withStatementExports.ts] ////

//// [a.cts]
declare const obj: any;

with (obj) /* body */ export let a; // trailing
with (obj) export var b;
with (obj) export let c = 1;
with (obj) { export let d; }

//// [a.ts]
export {};
declare const obj: any;

with (obj) export let a;


//// [a.cjs]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
with (obj) /* body */
    ; // trailing
with (obj)
    ;
with (obj)
    exports.c = 1;
with (obj) { }
//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
with (obj)
    ;
