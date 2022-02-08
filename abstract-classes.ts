export abstract class AbstractClass {
    abstract implementMe(): void;
    youMayImplementMe(): void {
        console.log('But I have my own implementation');
    }

    protected aprotectedMethod() {
        console.log('I am protected');
    }
}

export class ConcreteClass extends AbstractClass {
    implementMe(): void {
        console.log('OK, You are implemented')
    }
    constructor(){
        super()
      //  super.aprotectedMethod();
    }
    youMayImplementMe(): void {
        console.log('I\'m overriding you')
    }
}

const myConcrete = new ConcreteClass();
myConcrete.youMayImplementMe();
(myConcrete as AbstractClass).youMayImplementMe();

const myAbstract: AbstractClass = new ConcreteClass();
myAbstract.youMayImplementMe();