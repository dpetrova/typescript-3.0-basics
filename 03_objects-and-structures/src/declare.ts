namespace DeclareBtwDiffLetConstVar{
    //it is possible to use declare instead of one of the three declarators let,const, and var
    //however, declare won't generate any JavaScript code during compilation and must be used in conjunction with let, const or var
    //the role of declare is to indicate to TypeScript's compiler that the variable exists but is defined somewhere else
    
    declare let myVariable: string;

    declare module "messageformat" {}
}