//Generic and intersection allows the use of an undetermined type 
//and creates a second one with the combination of a known type or another generic

namespace GenericIntersection {

    interface WithId {
      id: number;
    }
    interface User {
      name: string;
    }
    interface Developer extends User {
      favoriteLanguage: string;
    }

    //a generic function that takes a type T that must respect to a minimum the structure of the User object
    //the return type of the function is the generic type passed by a parameter intersected by a new WithId structure
    //it means that whatever the type passed will be enhanced with the new structure
    function identifyUser<T extends User>(user: T): T & WithId {
      const newUser = (<any>Object).assign({}, user, { id: 1 });
      return newUser;
    }

    //the Developer type is passed to the function and the function returns Developer+WithId
    const user: Developer = { name: "Patrick", favoriteLanguage: "TypeScript" };
    const userWithId = identifyUser(user);
    console.log(`${userWithId.name} (${userWithId.id}) favorite language is ${userWithId.favoriteLanguage}`);
        

    //It is possible to intersect many generic types together
    //The merge function takes two different types and merges them using the JS assign function
    //The function returns the intersection of both types
    function merge<T, U>(obj1: T, obj2: U): T & U {
      return Object.assign({}, obj1, obj2);
    }
}    