export function genericEcho<T>(arg: T): T {
    return arg;
}

export function combineTypes<T1 extends object, T2 extends Object>(arg1: T1, arg2: T2): T1 & T2{
    return {...arg1, ...arg2};
}