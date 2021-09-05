//you can use an interface to ensure a class passed by the parameter has a specific constructor
//the process requires two interfaces: 
//one is the return type of the construction, and one is the interface used in the parameter

namespace interfaceConstructor {
    interface ConstructorReturnType {
        member1: number;
        funct(): void;
    }
    interface EntityConstructor {
        //a constructor function, known as newable
        //it uses the "new" keyword with the input parameters and what it needs to create
        new(value: number): ConstructorReturnType;
    }

    //the type should be the first interface created
    function entityFactory(ctor: EntityConstructor, value: number): ConstructorReturnType {
        return new ctor(value);
    }

    //only classes that respect the type contract of the newable function are accepted
    class Implementation1 implements ConstructorReturnType {
        public member1: number;
        constructor(value: number) {
            this.member1 = value;
        }
        public funct(): void {
        }
    }
    let impl1 = entityFactory(Implementation1, 1);
    console.log(impl1); // prints Implementation1 { member1: 1 } 

    //NOT COMPILE: because the class does not inherit the returned type defined by the newable function
    class Implementation2 {
        constructor(value: number) { }
    }
    let impl2 = entityFactory(Implementation2, 1); // Does not compile

    //it extends the returned class but does not respect the newable function argument that requires it to have a value
    //it is valid because the definition is only about the returned object and not the constructor
    class Implementation3 implements ConstructorReturnType {
        public member1: number = 1;
        constructor() {
           console.log(arguments);
        }
        public funct(): void { }
    }
    let impl3 = entityFactory(Implementation3, 1);
    console.log(impl3); // prints Implementation1 { member1: 1 } 
}