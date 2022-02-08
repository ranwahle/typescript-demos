import { genericEcho, combineTypes } from "./generic-methods.js";
import { AnInterface } from "interface.js";
import { AbstractClass } from "./abstract-classes.js";
import { MyGenerics } from "./generic-with-inheritence.js";
import { PromiseWithError, PromiseTypeWithError } from "./promise-with-error.js";




class AConctetClass extends AbstractClass {
    implementMe(): void {
        throw new Error("Method not implemented.");
    }
    
}
const interfaceImplementor: AnInterface = {
    aRequiredField: "",
    aRequiredMethod: function (): void {
        throw new Error("Function not implemented.");
    }
}

//typescript doesn't allow it

// const a = new MyGenerics({implementMe: () => console.log('Hi'), youMayImplementMe: () => {}
// aProtectedMethod(): () => {}});

const a = new MyGenerics(new AConctetClass());

const promise = new PromiseWithError<number, string>((resolve, reject) => {
    const a = Math.random();
    if (a < 0.5) {
        resolve(a);
    } else {
        reject(`The number ${a} is grater than 0.5`);
    }

}) 

 promise.then(console.log, console.error);


//  const promiseType:PromiseTypeWithError<number, string> = new Promise<number>((resolve, reject) => {
//     const a = Math.random();
//     if (a < 0.5) {
//         resolve(a);
//     } else {
//         reject(`The number ${a} is grater than 0.5`);
//     }

// }) 

//promiseType.then(console.log, console.error);
function genericFunction<T extends object, T1>(arg1: T, arg: T1) : T & T1 {

    return {...arg1, ...arg};

}
console.log(genericFunction({},4));
// const echo = genericEcho(5);
// console.log('We echoed', echo)

// console.log(combineTypes({a: 1}, {b:4})); // won't compile