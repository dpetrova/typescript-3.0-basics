//destructuring breaks an object into different pieces; TypeScript brings the type to these pieces

namespace Destructuring {
    interface MyObject {
        id: number;
        time: number;
        name: string;
        startTime: Date;
        stopTime: Date;
        category: string;
    }
    const obj: MyObject = {
        id: 1,
        time: 100,
        name: "MyName",
        startTime: new Date(),
        stopTime: new Date(),
        category: "Cat5"
    };

    //if you need to extract members from an object into a variable, this can be done without destructuring, but it takes several lines of code:
    const myObject_id = obj.id;
    const myObject_name = obj.name;
    const myObject_category = obj.category;
    console.log(myObject_id); // prints 1
    console.log(myObject_name); // prints MyName
    console.log(myObject_category); // prints Cat5

    //with destructuring, it can be done in a single line
    //destructuring can use the rest operator to take the remainder of the properties not specified
    //the rest of the syntax is the three dots before the name of the variable that will hold the rest of the members
    const { id, name, category, ...remainingMembers } = obj;
    console.log(id); // prints 1
    console.log(name); // prints MyName
    console.log(category); // prints Cat5
    console.log(remainingMembers.startTime); // prints System date
    console.log(remainingMembers.stopTime); // prints System date
    console.log(remainingMembers.time); // prints 100


    //destructuring and rest also work with an array
    //rest allows creating a new array with the remainder of the value with the type of the initial array
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [value1, value2, ...value3To9] = values;
    console.log(value1); // prints 1
    console.log(value2); // prints 2
    console.log(value3To9); // prints [ 3, 4, 5, 6, 7, 8, 9 ]

    const [value_1, , value_3, ...value4To9] = values;    
    console.log(value_1); // prints 1
    console.log(value_3); // prints 3
    console.log(value4To9); // prints [ 4, 5, 6, 7, 8, 9 ]
    


}
