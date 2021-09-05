//an object literal is an efficient way to move data around
//you can read a JSON file, receive the data from an Ajax call or from many sources, and cast to the desired type
//however, if you have many functions or more complex logic, a class is more pragmatic

namespace classVariables {
  
  interface ObjectDefinition {
    m1: string;
    funct1: () => void;
  }  
  
  let ajax: any;

  //using an object literal would require assigning the function on each instance manually
  const funct1 = () => { };
  ajax.then((response: any) => {
    const r = response as ObjectDefinition;
    r.funct1 = funct1;
    return r;
  });

  //you can facilitate by having a function that builds each object literal by attaching the functions
  //this function acts as a constructor
  function createObj(m1: string): ObjectDefinition {
    return {
      m1: m1,
      funct1: () => { }
    }
  }
  ajax.then((response: any) => {
    const r = response as ObjectDefinition;
    return createObj(r.m1);
  });


  //the same code with a class looks like
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

  
  //here is a third version using an interface for the variables and the functions
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


  //a class has the advantage of allowing any of the members to be stubbed easily
  //here is a simple example with the Jest library
  const forTesting = new ObjectDefinitionClass("1");
  forTesting.funct1 = jest.fn();
    
}