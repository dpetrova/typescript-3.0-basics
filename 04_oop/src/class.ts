//class is a definition of what is available for an object once instantiated

namespace classVariables {
  
  //class can define variables and functions; each of them is public by default
  export class Variables {
    public a: number = 1;
    private b: number = 2;
    protected c: number = 3;
    d: number = 4; // also public
  }

  //once a class is defined, it can be instantiated (to create an instance of a class, the new keyword must be used)
  //the instantiation of a class calls the constructor of the class; if this one is not defined, nothing is called
  const d = new Variables();

  //encapsulation visibility:
  console.log(d.d); //public are accessible from outside the class
  console.log(d.b) //private are accessible only within the class
  console.log(d.c) //protected are accessible only within the class and its subclasses


  class MyClass {
    private m1: number;
    private m2: string;
    private m3: number;

    //the constructor's goal is to provide initialization of data to the class
    constructor(param1: number, param2: string) {
      this.m1 = param1;
      this.m2 = param2;
      this.m3 = 123;
    }
  }

  //in the case where the parameters are defined, the initialization must provide all the non-optional parameters
  const myClassInstance = new MyClass(1, "Must be present");
  console.log(myClassInstance); // prints MyClass { m1: 1, m2: 'Must be present', m3: 123 }


  //a constructor can be overloaded by many signatures; the use of many definitions is possible with the use of a semicolon
  class ClassWithConstructorOverloaded {
    private p1: number;
    private p2: string;

    constructor(p1: number);
    constructor(p1: number, p2?: string) {
      this.p1 = p1;
      if (p2 === undefined) {
        p2 = "default";
      }
      this.p2 = p2;
    }
  }

  const overloaded1 = new ClassWithConstructorOverloaded(1);
  const overloaded2 = new ClassWithConstructorOverloaded(1, "hello");
  console.log(overloaded1); // prints ClassWithConstructorOverloaded { p1: 1 }
  console.log(overloaded2); // prints ClassWithConstructorOverloaded { p1: 1, p2: 'hello' }


  //the class that inherits the second class does not need to have the same number of constructor parameters, nor the same type
  //if a class extends another class, what is important is the call to super with the parameters of the right type of the extended class
  class MyClass2 extends MyClass {
    constructor(p1: number) {
      //MyClass has a constructor that takes a number and a string;
      //MyClass2 which extends MyClass, must call super with a number and a string
      super(p1, "Here");
    }
  }

  const myClass2 = new MyClass2(123);
  console.log(myClass2); // prints MyClass2 { p1: 1, p2: 'Here', p3: 123 }


  //class declares by variables and functions by public, private, and protected encapsulation visibility keywords
  //public allows the variable to be available inside and outside the class
  //private restrict the access to the class itself
  //protected variable shares access down the hierarchy of classes; that means that all classes that inherit a class with protected members have access to that protected members
  class BaseClass {
    public a: number = 1;
    private b: number = 2;
    protected c: number = 3;
  }

  class ChildClass extends BaseClass {
    public d: number = 1;
    private e: number = 2;
    protected f: number = 3;

    //the child class has access to the base class members that are public and protected
    public f1() {
      // super.a;
      // super.b;
      // super.c;
      this.a;
      this.b;
      this.c;
    }
  }
  
  const child = new ChildClass();
  //once the child class is instantiated, only public variables are available
  console.log(child.a); // prints 1 
  console.log(child.b); // not compile
  console.log(child.c); // not compile 
  console.log(child.d); // prints 1
  console.log(child.e); // not compile 
  console.log(child.f); // not compile 


  //next two class declarations are the same result:
  class MyClass3 {
    public constructor(private p1: number, public p2: string) { }
  }
  const myClass3 = new MyClass3(1, "2");
  console.log(myClass3.p2); // prints 2 

  class MyClass3Same {
    private p1: number;
    public p2: string;
    public constructor(p1: number, p2: string) {
      this.p1 = p1;
      this.p2 = p2;
    }
  }
  const myClass3Same = new MyClass3Same(1, "2");
  console.log(myClass3Same.p2); // prints 2



  class PrivateConstructor {
    private constructor() {
    }
  }
  // const pc = new PrivateConstructor(); // Does not compile

  class SingletonClass {
    private static instance: SingletonClass;
    private constructor() {
      SingletonClass.instance = new SingletonClass();
    }
    public static GetInstance(): SingletonClass {
      return SingletonClass.instance;
    }
  }
  const singletonClass = SingletonClass.GetInstance();

  interface ObjectDefinition {
    m1: string;
    funct1: () => void;
  }
  let ajax: any;
  const funct1 = () => { };
  ajax.then((response: any) => {
    const r = response as ObjectDefinition;
    r.funct1 = funct1;
    return r;
  });

  class ObjectDefinitionClass implements ObjectDefinition {
    public m1: string;
    public funct1(): void { }
    constructor(param1: string) {
      this.m1 = param1;
    }
  }
  ajax.then((response: any) => {
    const r = response as ObjectDefinition;
    return new ObjectDefinitionClass(r.m1);
  });

  interface Model {
    m1: string;
  }
  interface Funct {
    funct1: () => void;
  }
  class ObjectDefinitionClass2 implements Model, Funct {
    public m1: string;
    public funct1(): void { }
    constructor(param1: Model) {
      this.m1 = param1.m1;
    }
  }
  ajax.then((response: any) => {
    const r = response as Model;
    return new ObjectDefinitionClass2(r);
  });


  function createObj(m1: string): ObjectDefinitionClass {
    return {
      m1: m1,
      funct1: () => { }
    }
  }
  ajax.then((response: any) => {
    const r = response as Model;
    return createObj(r.m1);
  });

  const forTesting = new ObjectDefinitionClass("1");
  forTesting.funct1 = jest.fn();
}