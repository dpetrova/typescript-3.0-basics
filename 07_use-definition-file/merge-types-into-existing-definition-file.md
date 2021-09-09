## How to merge types into an existing definition file

Types can be written in several places and merged into a single set of definitions
that TypeScript can rely on. The principle is that you may be able to extend
existing definitions with your own. The merging capability is helpful when you
have JavaScript code that can be enhanced with plugins or with extensions. 

For example, the library Redux has its definition files in its repository and NPM
package. The library named Redux-thunk also has its definition file, which adds to
Redux a new dispatch function signature that overrides the one defined by redux.
The definition file relies on merging type to add its own definition of the
dispatch into the redux module:

declare module "redux" {
    export interface Dispatch<S> {
        <R, E>(asyncAction: ThunkAction<R, S, E>): R;
    }
}
