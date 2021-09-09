
## How to use a third-party library definition file

TypeScript works well when it knows the type of every variable and function.
However, when using third-party libraries written in JavaScript, you do not have
a definition file. TypeScript is smart and tries to infer type as much as it can by
leveraging the standard documentation JSDoc, but nothing beats a signature
written with TypeScript rules. A definition file fills the gap between JavaScript and TypeScript. 

For a third-party library, the idea is to use a definition file.
To use a third-party library definition file, you need to have the file in our
project. The TypeScript definition file is a .d.ts extension. TypeScript will search
for a definition file in the node_modules folder as well as in our project. Because
TypeScript uses the node_modules, it means it can fetch definition files from NPM.
TypeScript has one of the most active GitHub repositories, which has over 4,200
definition files supported by the community. They are all accessible using NPM
under @types. Here is an example of how to get JQuery definition files:

npm install @types/jquery --save-dev

The rising popularity of TypeScript made many libraries incorporate the
definition file directly into their main npm package. For example, Redux, has
index.d.ts at the root of the main npm package. It means that you may already have
the definition files without noticing.

Other than the node_modules, TypeScript reads the configuration types and typeroots
in the tsconfig.json file.

If a definition file is missing for a third party, you can create one; create a type
that sets to any the main export that would remove the type safety but be able to
access anything.