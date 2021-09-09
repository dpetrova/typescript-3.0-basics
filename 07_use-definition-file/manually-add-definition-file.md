## How to manually add a definition file for a JavaScript project

To create a definition file from a project that you do not own, you need to create
a folder with the name of the module you want to add types to, and add an
index.d.ts file. However, if you own the library, you can set the types or typing
(they are synonyms) to the path and filename of the definition file. In the
following code example, the definition file is set to main.d.ts under the lib folder.
If the types or typing are not provided, the definition file must be called index.d.ts
at the root of the package folder.

Using index.d.ts is the best practice because TypeScript is optimized to search for
index.d.ts when doing module resolution, as well as having the file with the name
of the module (followed by .d.ts):

{
    "name": "your-library",
    "main": "./lib/main.js",
    "types": "./lib/main.d.ts"
}

As with library, all dependencies must be specified. This time, all the definition
file libraries must be mentioned in the package.json. It is important to notice that
we are not referring to the definition files in the dev dependencies, because we
want to have all the types downloaded and installed by the consumer of our
definition file library.
