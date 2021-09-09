//A default generic type allows avoids having to specify a type
//A default generic is also known as an optional type

namespace DefaultGeneric {

    interface BaseType<T = string> {
      id: T;
    }

    let entity1: BaseType; //relies on the default type
    let entity2: BaseType<string>;
    let entity3: BaseType<number>;


    //Default generic can have constraints
    interface User<T = string> {
     id: T;
    }        
    interface WithId {
        id: number;
    }
    //Does not compile: because the default type is set to be a number, however, the constraint mentions that the structure must have an id of type number
    interface UserWithDefault1<T extends WithId = number> { }
    //Compile: because user interface has an id field of type T
    interface UserWithDefault2<T extends WithId = User<number>> { }
    //Does not compile: because use default User<string>
    interface UserWithDefault3<T extends WithId = User { }

    
    // Does not compile: because it has the optional generic type before a required type
    interface User1<T = string, U> { 
      id: T;
      name: U;
    }

    interface User2<U, T = string> {
      id: T;
      name: U;
    }    
} 
