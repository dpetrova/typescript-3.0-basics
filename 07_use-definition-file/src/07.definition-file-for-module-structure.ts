//If you need to provide a definition file, it is recommended to name an index.d.ts 
//with the following rules:

//1.There is an optional export declaration that is needed if the library supports UMD. This happens when the library exports a variable
export as namespace myScope;

//2.Add every function/object directly to the definition file. There is no need to englobe the functions/objects into a namespace. 
export function myFunction(): void;
export interface MyObject {
    x: number;
}
export let data: string;

//usage of the function, interface, and variable would be like this in the actual code:
import {myFunction, MyObject, data} from "myScope";
myFunction();
let x:MyObject = {x:1};
console.log(data);

//3. to have an object inside your module:
export namespace myProperty {
    export function myFunction2(): void;
}

//the usage of the namespace is available in two formats:
//the first is with the explicit callout of the element to be retrieved from the module:
import { myProperty } from "myScope";
myProperty.myFunction2();
//the second with the star, gets the whole content definition into the alias:
import * from my from "myScope"
my.myProperty.myFunction2();



//The following code works for modern module creation. 
//It uses the declare statement with a module. 
//The module name must be the library name between quotes. 
//Inside the module, you can define your export for CommonJs/Amd with export =, followed by what you want to export by default. 
//It is possible to not have a CommonJs/Amd export and to export every type. 
//You can export a namespace that contains many types as well
declare module "modulenamehere" {
    type Msg = (params: {}) => string;

    type SrcMessage = string | SrcObject;

    interface SrcObject {
      m1: SrcMessage;
    }

    class MessageFormat {
      constructor(message: string);
      constructor();
      compile: (messages: SrcMessage, locale?: string) => Msg;
    }

    export = MessageFormat ; // CommonJs/AMD export syntax
}
 
// Usage:
import MessageFormat from "modulenamehere";
const mf = new MessageFormat("en");
const thing = mf.compile("blarb");
    

//
declare module "react-summernote" {
    import * as React from "react";
    let ReactSummernote: React.ComponentClass<any>;
    export default ReactSummernote;
}

//
import * as extendMe from "moduleToExtend";
import * as other from "anotherModule";
declare module "moduleToExtend" {
    export function theNewMethod(x:extendMe.aTypeInsideModuleToExtend): other.anotherTypeFromAnotherModule;
    export interface ExistingInterfaceFromModuleToExtend {
        newMember: string;
    }
    export interface NewTypeForModuleToExtend {
        size: number;
    }
}
