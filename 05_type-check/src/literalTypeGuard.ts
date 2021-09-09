//JavaScript doesn't have a type; hence, it is a structural language
//C# or Java are both nominal languages
//It means that TypeScript doesn't check for the name of the interface or type to take any decision

namespace Structural {
    interface Type1 {
        m1: string;
    }
    interface Type2 {
        m1: string;
    }
    type Type3 = { m1: string };
    
    const v0 = { m1: "AllTheSame" };
    const v1: Type1 = v0;
    const v2: Type2 = v0;
    const v3: Type3 = v0;

    //the object can be of each type
    console.log(v1); // { m1: "AllTheSame" }
    console.log(v2); // { m1: "AllTheSame" }
    console.log(v3); // { m1: "AllTheSame" }


    //The way to make every type different is with the concept of a discriminator
    //A discriminator is a member with a shared name between a group of a common type that needs to be distinguished
    //The idea is to have a unique string literal per type with the same name
    //The usage of a string literal as a discriminator is often named the literal type guard or the tagged union.
    //It is powerful for functional programming and provides a quick way to identify a type without having to develop specific conditions as needed in other techniques such as a user-defined guard
    
    //the following code example applies this principle:
    //the common member is named kind, and each interface and type has a unique one
    interface Type4 {
      kind: "Type4";
      m1: string;
    }
    interface Type5 {
      kind: "Type5";
      m1: string;
    }    
    type Type6 = { kind: "Type6"; m1: string };
    
    //the anonymous type tries to impersonate Type4 but fails because the type inferred is a string and not a string literal
    const v4 = { kind: "Type4", m1: "AllTheSame" };
    const v5: Type4 = v0; // Does not compile
    const v6: Type5 = v0; // Does not compile
    const v7: Type6 = v0; // Does not compile
    
    //the discriminator is useful also for narrowing down a type
    function threeLogic(param: Type4 | Type5 | Type6): void {
      switch (param.kind) {
        case "Type4":
          console.log(param.m1); // param is type Type4
          break;
        case "Type5":
          console.log(param.m1); // param is type Type5
          break;
        case "Type6":
          console.log(param.m1); // param is type Type6 
          break;
      }
    }    
    const type4: Type4 = { kind: "Type4", m1: "Type-4" };
    const type5: Type5 = { kind: "Type5", m1: "Type-5" };
    const type6: Type6 = { kind: "Type6", m1: "Type-6" };
    threeLogic(type4); // prints Type-4
    threeLogic(type5); // prints Type-5
    threeLogic(type6); // prints Type-6
    
    //if we have an interface with completely different members, the distinction is primordial
    //to have access to a member that is unique to one interface or another
    interface Alpha { kind: "Alpha", alpha: string }
    interface Beta { kind: "Beta", beta: string }
    function AlphaBeta(param: Alpha | Beta): void {
      switch (param.kind) {
        case "Alpha":
          console.log(param.alpha);
          break;
        case "Beta":
          console.log(param.beta);
          break;
      }
    }    
    const alpha: Alpha = { kind: "Alpha", alpha: "Type-Alpha" }
    const beta: Beta = { kind: "Beta", beta: "Type-Beta" }
    AlphaBeta(alpha); // prints Type-Alpha
    AlphaBeta(beta); // prints Type-Beta
}