namespace instanceOfLimitations {
  
  class MyClass1 {
    member1: string = "default";
    member2: number = 123;
  }
  class MyClass2 {
    member1: string = "default";
    member2: number = 123;
  }
  const a = new MyClass1();
  const b = new MyClass2();

  //instanceof can be only used on a type with a prototype chain: a class
  if (a instanceof MyClass1) {
    console.log("a === MyClass1");
  }
  if (b instanceof MyClass2) {
    console.log("b === MyClass2");
  }
  
  //instanceOf operator does not distinguish which class is exactly used in the situation of inheritance
  class MyClass3 extends MyClass2 {
    member3: boolean = true;
  }
  const c = new MyClass3();
  if (c instanceof MyClass2) {
    console.log("c === MyClass2"); //true
  }
  if (c instanceof MyClass3) {
    console.log("c === MyClass3"); //true
  }

  //NOT COMPILE:
  type MyType = instanceOf MyClass1;
}