//TypeScript provides constraints to limit what can be passed into generic
//You can leverage the constraint to guide the user as to what can be passed

namespace GenericContraint {
    //here we used the type object to make sure no primitives were passed in an interface;
    //the problem with the use of an object is that you do not get back the initial type
    interface ReusableInterface2 {
      entity: object;
    }
    const a = {
      what: "ever"
    };
    const c: ReusableInterface2 = { entity: a };
    console.log(c.entity.what); // Does not compile because "what" is not of object


    //keep the original type and have a constraint to not allow a primitive with the keyword "extends"
    interface AnyKindOfObject {
      what: string;
    }
    interface ReusableInterface3<T extends object> {
      entity: T;
    }
    const d: ReusableInterface3<AnyKindOfObject> = { entity: a };
    console.log(d.entity.what); // Compile


    //"extends" keyword allows specifying the minimum structure that must be present in the object passed to the generic type
    interface ObjectWithId {
      id: number;
      what: string;
    }
    interface ReusableInterface4<T extends { id: number }> {
      entity: T;
    }
    const e: ReusableInterface4<AnyKindOfObject> = { entity: a }; // Doesn't compile: variable is set to a wrong object    
    const g: ReusableInterface4<string> = { entity: "test" }; // Doesn't compile: variable is set to a string, but the generic constraint cannot be fulfilled by the string because it doesn't have the id:number field
    const f: ReusableInterface4<ObjectWithId> = { entity: { id: 1, what: "1" } }; // Compile: because of the entity respect the constraint


    //a generic with a constraint that is an interface
    interface ReusableInterface5<T extends ObjectWithId> {
      entity: T;
    }

    //generic with constraint allows accessing the constrain field from the class or function that implements the generic
    
    //the function, has the constraint directly at the function signature;
    //it allows accessing only the field from the constraint
    function funct1<T extends ObjectWithId>(p: T): void {
      console.log(`Access to ${p.what} and ${p.id}`);
    }

    //a class lets you use inside any of its functions, the field from the generic constraint
    class ReusableClass<T extends ObjectWithId>{
      public list: T[] = [];
      public funct1(): void {
        this.list.forEach((p) => {
          console.log(`Access to ${p.what} and ${p.id}`);
        });
      }
    }      
}    