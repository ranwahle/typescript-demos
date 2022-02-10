import { NumberLiteralType } from "typescript";

export class MyGenerics<T> {
    public myData: T;
}

export class MyGenericCunstructor<T> {
    constructor(public myData: T){
        
    }
}




const myGeneric = new MyGenericCunstructor({value: 7})

const myFirstGenerics = new MyGenerics<{member: string, age: number}>();
myFirstGenerics.myData = {member: 'Ran', age : 6}

const mySecondGenerics = new MyGenerics<number>();
mySecondGenerics.myData = 5;

const myGenericObject = new MyGenericCunstructor(5);
console.log(myGenericObject.myData);