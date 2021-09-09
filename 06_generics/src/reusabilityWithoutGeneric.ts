//Without generic, there are different ways to achieve reusability

namespace WithoutGeneric {
    
    //you can have an interface with an any type
    interface ReusableInterface1 {
      entity: any;
    }

    //a slightly better way would be to specify whether we want to accept primitives or only objects
    interface ReusableInterface2 {
      entity: object;
    }
    const ri2a: ReusableInterface2 = { entity: 1 }; // Does not compile
    const ri2b: ReusableInterface2 = { entity: { test: "" } };

    //the problem comes when we want to use the reusable field, as we do not have access
    //to the original variable's member because we do not have a way to know what was the original type
    const value = ri2b.entity.test; // Does not compile because "test" is not of object

}