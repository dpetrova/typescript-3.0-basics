//A namespace can be used to define a function variable.
//In JavaScript, it is possible to assign a variable to a function by using the function name and the dot notation. 
//To define the type of this function, it requires specifying not only the parameter name and return type but also the variable. 
//This is possible by defining a namespace with the function name

function functionInJavaScript(param: string): string {
    return functionInJavaScript.variableOfFunction + param;
}

namespace functionInJavaScript {
    export let variableOfFunction = "";
}

