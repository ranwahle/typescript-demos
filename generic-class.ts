import { NumberLiteralType } from "typescript";

export class MyGenerics<T> {
    public myData: T;
}

export class MyGenericCunstructor<T> {
    constructor(public myData: T){
        
    }
}

function genericFunction<T, T1>(arg1: T, arg: T1) : T & T1 {

    return {...arg1, ...arg};

}

console.log('Generic function',genericFunction(1, 4));

const myGeneric = new MyGenericCunstructor({value: 7})

const myFirstGenerics = new MyGenerics<{member: string, age: number}>();
myFirstGenerics.myData = {member: 'Ran', age : 6}

const mySecondGenerics = new MyGenerics<number>();
mySecondGenerics.myData = 5;

const myGenericObject = new MyGenericCunstructor(5);
console.log(myGenericObject.myData);