
function func1(arg1: number, arg2: string ): void;
function func1(arg1: number, arg2: string, arg3: string ): void;

function func1(arg1: number, arg2: string, arg3?: string ): void {
    console.log(arg3? 'You have provided arg3': 'You have not provided arg3');
}


function  neverHaveANumber(arg1: number): never;

function neverHaveANumber(arg1: string): any;

function neverHaveANumber(arg1: string | number): any |never {
    if (typeof arg1 === 'number') {
    throw Error();
    }
    return arg1;
}

neverHaveANumber(4);
