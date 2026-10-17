// @target: es2015
// @strict: false
// Repro from #20096

let foo = (async bar => bar);

const a = true;
const b = 1;
const c = [b];

function async(...c: number[]): number {
    return b;
}

const f1 = a ? async() : 0;
const f2 = a ? async() : x => x;
const f3 = a ? a ? async() : 0 : b;
const f4 = a ? x => async() : x => x;
const f5 = a ? async (): Promise<number> => b : () => b;
const f6 = a ? async (): Promise<number> => { return b; } : () => b;
const f7 = a ? async (): Promise<number> => a ? async() : 0 : () => b;
const f8 = a ? (): number => b : () => b;

const f9 = a ? async(...c) : 0;
const f10 = a ? async(...c) : x => x;
const f11 = a ? async (...c: number[]): Promise<number> => c.length : () => 0;
const f12 = a ? async() : x => async (...c): Promise<number> => c.length;

type T = Promise<number>;
const f13 = a ? async() : x => async (): Promise<number> => b;
const f14 = a ? async() : x => async (): T => 0;
const f15 = a ? (b) : x => async (): T => 0;
const f16 = a ? async(...c) : x => async (): T => 0;

function* g() {
    const f1 = a ? yield async(...c) : 0;
    const f2 = a ? yield async(...c) : x => x;
}
