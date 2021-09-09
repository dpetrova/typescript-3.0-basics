namespace AccessMembers {

    interface Human {
      name: string;
      birthdate: Date;
      isHappy: boolean;
      age: number;
    }
    const me: Human = {
      name: "Patrick",
      birthdate: new Date(1912, 0, 1),
      isHappy: true,
      age:22
    }
    //access a member of an object dynamically with the square bracket
    //the problem with the code is that name is a string and could be anything
    console.log(me["name"]);
    console.log(me["firstname"])      
    

    //function that try to access a property by a string will fail, without defining an index signature
    function showMe1(obj: Human, field: string): void {
      console.log(obj[field]); // Does not compile
    }
    //function with keyof will work without an index signature;
    //to avoid selecting a member that does not exist, we can use keyof, which will return a union of all members of an object
    function showMe2(obj: Human, field: keyof Human): void {
      console.log(obj[field]); // Compile
    }
    showMe2(me, "name") // Compile
    showMe2(me, "noName") // Does not compile


    //it is possible to use generic with keyof in a constraint 
    //to only specify in a string format member name from the generic object
    function prop<TObject, TMember extends keyof TObject>(obj: TObject, key: TMember): TObject[TMember] {
      return obj[key];
    }   
    const result1: string = prop(me, "name");
    const result2: Date = prop(me, "birthdate");
    const result3: number = prop(me, "age");
    const result4: undefined = prop(me, "noMember"); // Does not compile


    function nameof<T>(instance: T, key: keyof T): keyof T {
      return key;
    }
    const name1 = nameof(me, "name");
    const name2 = nameof(me, "noName"); // Does not compile
    console.log(name1); // "name"
        
} 