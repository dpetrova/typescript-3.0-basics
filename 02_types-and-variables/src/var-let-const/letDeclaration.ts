//NOT COMPILE: Will not let you redeclare a variable that overrides the initial declaration or initialization more than once
function notCompilingFunction() {
  let a: number = 1;
  console.log(a);
  let a: number = 2;
  console.log(a);
}

//COMPILE
function compilingFunction() {
  //function scope
  let a: number = 1;

  // artificial scope
  { // Scope start
    let a: number = 2;
  } // Scope end
  console.log(a); // 1

  // scope within an if statement
  if (true) { // Scope start
    let a: number = 3;
  } // Scope end
  console.log(a); // 1
}

//NOT COMPILE
function notCompilingSwitchFunction(num: number) {
  let b: string = "functionb";
  console.log(b); // prints functionb

  //conceive a scope by summoning a curly bracket inside each case
  switch (num) {
    case 1:
      let b: string = "case 1";
      console.log(b);
      break;
    case 2:
      let b: string = "case 2";
      console.log(b);
  }
}

//COMPILE
function switchFunction(num: number) {
  let b: string = "functionb";
  console.log(b); // prints functionb

  //conceive a scope by summoning a curly bracket inside each case
  switch (num) {
    case 1: {
      let b: string = "case 1";
      console.log(b);
      break;
    } // After break
    case 2: {
      let b: string = "case 2";
      console.log(b);
    } // Before break
      break;
  }
}
