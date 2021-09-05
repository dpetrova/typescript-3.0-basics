//an interface defines which members you want the consumer to see and use
//public, private, and protected visibility keywords serve the same purpose
//however, in some cases, you may need to have public members and still not allow everyone to use them,
//one reason can be that you want to have deep access to unit testing

namespace InterfaceUseful {

    //the class has two private functions that are executed by the main function,
    //however, the encapsulation does not allow us to unit test the private functions
    class ClassA {
        public mainFunction(): void {
            this.subFunction1();
            this.subFunction2();
        }
        private subFunction1(): void { }
        private subFunction2(): void { }
    }

    //a better practice is to use an interface to keep the type present at all times
    //everything is public, however, all the system is using IClassA instead of the class directly providing the encapsulation desired
    interface IClassA {
        mainFunction(): void;
    }

    class ClassA2 implements IClassA {
        public mainFunction(): void {
            this.subFunction1();
            this.subFunction2();
        }
        public subFunction1(): void { }
        public subFunction2(): void { }
    }

    const myClassA2: IClassA = new ClassA2()
    myClassA2.mainFunction()
    myClassA2.subFunction1() // Does not compile  
    myClassA2.subFunction2() // Does not compile  
    

    //another case where the interface is useful is that it allows us to have many concrete implementations of a specific type
    //in the following example, we have a consume function that takes IElement as input;
    //there are two concrete implementations of IElement, which gives the code the flexibility to have many element implementations
    interface IElement {
        m1: string;
    }

    class E1 implements IElement { 
        m1: string = "E1->m1";
        a: number = 1; 
    }

    class E2 implements IElement { 
        m1: string = "E2->m1"; 
        b: boolean = true; 
    }

    class ClassB {
        public consume(element: IElement): void { }
    }
}