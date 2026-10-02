//// [tests/cases/conformance/importDefer/exportDeferInvalid.ts] ////

//// [a.ts]
export function f() {
  console.log("foo from a");
}

//// [b.ts]
export defer * from "./a.js";


//// [a.js]
export function f() {
    console.log("foo from a");
}
//// [b.js]
export defer * from "./a.js";
