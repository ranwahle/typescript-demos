import { AbstractClass } from "./abstract-classes";

export class MyGenerics<T extends AbstractClass> {
    constructor(private anObject: T){

    }

    callImplementation() {
        this.anObject.implementMe();
    }
}