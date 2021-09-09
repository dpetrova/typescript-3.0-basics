namespace guardPattern {
  //using a discriminator (literal type guard) has a drawback with inheritance and intersection

  //problem with inheritance
  interface Type1 extends Type2 { // Does not compile
    kind: "Type1";
    m1: number;
  }
  interface Type2 {
    kind: "Type2";
    m2: string;
    m3: number;
  }
  interface Type3 {
    kind: "Type3";
    m3: string;
  }

  //problem with intersection
  type Type4 = Type2 & Type3;  
  const type4: Type4 = { kind: "Type2", m2: "1", m3: "2" }; 


  //use a custom user-defined guard per type
  //the idea is to check for fields and see whether they are defined
  //you do not need to check every field; you should know which field is enough to identify the type
  interface Type5 extends Type6 {
    m1: number;
  }
  interface Type6 {
    m2: string;
    m3: number;
  }
  //the return type of the defined guard is unique
  //it uses the name of the parameter followed by is and the type we are expecting if the value is true
  //if everything is present and defined, it returns true
  function checkInterfaceICheck1(obj: any): obj is Type5 {
    const type1WithMaybeManyUndefinedMembers = (obj as Type5);
    return type1WithMaybeManyUndefinedMembers.m1 !== undefined
      && type1WithMaybeManyUndefinedMembers.m2 !== undefined
      && type1WithMaybeManyUndefinedMembers.m3 !== undefined
  }
  function checkInterfaceICheck2(obj: any): obj is Type6 {
    const type1WithMaybeManyUndefinedMembers = (obj as Type6);
    return type1WithMaybeManyUndefinedMembers.m2 !== undefined
      && type1WithMaybeManyUndefinedMembers.m3 !== undefined;
  }
  //the function must know which of the two types are passed, and it checks by using the user-defined guard
  function codeWithUnionParameter(obj: Type5 | Type6): void {
    if (checkInterfaceICheck1(obj)) {
      console.log("Type5", obj.m1);
    }
    if (checkInterfaceICheck2(obj)) {
      console.log("Type6", obj.m2);
    }
  }

  const type5: Type5 = { m1: 1, m2: "hello-type5", m3:2 };
  const type6: Type6 = { m2: "hello-type6", m3:2 };

  codeWithUnionParameter(type5);
  codeWithUnionParameter(type6);

}