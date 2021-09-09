//You may need to have almost the same type but with some minor differences
//TypeScript allows creating dynamic type from an existing one.
//This transformation of the type is named mapped type

namespace MappedType {

    // 1. TypeScript comes with many mapped types that you can use without having to build your own mapped type
    
    //Readonly, takes a generic type and loops all its members and adds readonly
    type Readonly<T> = {
      readonly [P in keyof T]: T[P];
    }
    //Partial, adds the ? character after the name, which means that every field becomes optional
    type Partial<T> = {
      [P in keyof T]?: T[P];
    }
        

    interface MyEntity {
      readonly id: number;
      name: string;
    }
    const e1: MyEntity = { id: 1, name: "Name1" };

    //use Readonly if you want to have the variable to be sealed and completely not editable 
    const e2: Readonly<MyEntity> = e1;
    e1.name = "I can change";
    e2.name = "I cannot change"; // Does not compile: we cannot change readonly field

    //use Partial if you want to allow to modify only a part of your entity and then merge the result 
    function edit<T>(original: T, obj: Partial<T>): T {
      const returnObject: T = Object.assign({}, original, obj);
      return returnObject;
    }
    edit(e1, { name: "Super" }); // The returned object is: {id: 1, name: "Super"}
    edit(e1, { memberNoExist: "Super" }); // Does not compile


    // 2. You can create your own mapped type by using the type keyword 
    //and creating a name with an in operator to loop the member and defining the transformation.
    //It is important to notice that we do not manipulate the data, only the type

    //custom type that returns a string for all members
    type Stringify<T> = { [P in keyof T]: string; };

    //custom type that removes the Readonly;
    //the minus sign before the property, indicates to TypeScript that the modifier of the member is taken away
    type UnReadonly<T> = { -readonly [P in keyof T]: T[P]; };


    // 3. Mapped type can be stacked to create a final type that combines all mapped types
    const e3: UnReadonly<Stringify<MyEntity>> = e1;        
} 