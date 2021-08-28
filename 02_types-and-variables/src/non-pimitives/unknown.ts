//function can take anything and expect to return a string
//no cast is required because a variable of type any can return a string
function func1(x: any): string {
    return x;
}

//unknown type cannot be assigned to types other than unknown or any
function func2(x: unknown): string {
    return x; // Does not compile
}