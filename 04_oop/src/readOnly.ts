//read-only fields can be initialized once and don't need to be changed during the lifetime of the instance

namespace ReadOnlyField {

  //readonly keyword can be used in an interface
  //to specify that field is set once and the value doesn't change  
  interface I1 {      
      readonly id: string;
      name: string;
  }
  let i1: I1 = {
      id: "1",
      name: "test"
  }
  i1.id = "123"; // Does not compile


  //readonly can be at the class level
  //where the value can be only set directly at the declaration or in the constructor
  class C1 {
      public readonly id: string = "C1";
      constructor() {
          this.id = "Still can change";
      }
      public f1(): void {
          this.id = 1; // Doesn't compile
      }
  }


  //read-only with static can be useful to have constant for a particular class
  //as the use of const is not allowed at a class level
  class C2 {
      public static readonly MY_CONST: string = "TEST";
      public CodeHere(): void {
          C2.MY_CONST;
      }
  }
}