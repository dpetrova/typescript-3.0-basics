//when a string is set to a type, it is possible to assign one value and change it later
let myStr: string = "Value1";
myStr = "Value2";

//the only value possible to set to a string literal is the exact string stamped at the declaration (assurance that the value is unique)
//when using string literal, always provide the type using the colon
let myLiteral: "onlyAcceptedValue" = "onlyAcceptedValue"
myLiteral = "onlyAcceptedValue"; //Compile
myLiteral = "sdasd"; // Won't compile

//it is possible to create a literal by omitting the type only if declared with const because the value cannot change
const myLiteral2 = "onlyAcceptedValue"; // Not a string


//Having a shared field (with the name) among the interfaces with a unique string literal allow comparison at design time and run-time
interface Book {
    type: "book";
    isbn: string;
    page: number;
}

interface Movie {
    type: "movie";
    lengthMinutes: number;
}

let hobby: Movie = { type: "movie", lengthMinutes: 120 };

function showHobby(hobby: Book | Movie): void {
    if (hobby.type === "movie") {
        console.log("Long movie of " + hobby.lengthMinutes);
    } else {
        console.log("A book of few pages: " + hobby.page);
    }
}

showHobby(hobby);

