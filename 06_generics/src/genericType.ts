//Generic allows transforming your code in a reusable way without having to rely on unsafe casting
//Generic increase the reusability of your classes, functions, and structures, to reduce the burden of duplicating code

namespace Generic {    
    
    interface MyCustomTypeA {
      test: string;
    }
    interface MyCustomTypeB {
      anything: boolean;
    }

    //to create a generic function/interface/class, you need to use the smaller or bigger sign < >;
    //the name between the brackets does not matter
    interface ReusableInterface3<T> {
      entity: T;
    }
     
    //we are using the entity with two custom interfaces and a number directly as type T
    const ri3a: ReusableInterface3<MyCustomTypeA> = { entity: { test: "yes" } };
    const ri3b: ReusableInterface3<MyCustomTypeB> = { entity: { anything: true } };
    const ri3c: ReusableInterface3<number> = { entity: 1 };
    //the biggest advantage is that if we access the object's field entity,
    //it is of a T type, which changes depending on how the object was created
    console.log(ri3a.entity.test); // "yes" -> string
    console.log(ri3b.entity.anything); // true -> boolean
    console.log(ri3c.entity); // 1 -> number


    //examples of generic type/interface/class/variable/function:
    type MyTypeA<T> = T | string; //Type

    interface MyInterface<TField,YField> { // Interface wiht two types
        entity1: TField;
        myFunction(): YField;
    }
    
    class MyClass<T>{ // Class
        list: T[] = [];
        public displayFirst(): void {
            const first: T = this.list[0]; // Variable
            console.log(first);
        }
    }

    function extractFirstElement<T, R>(list: T[], param2: R): T { // Function
        console.log(param2);
        return list[0];
    }

}