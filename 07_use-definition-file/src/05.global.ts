//It is possible to declare at the global scope an interface function:
declare global {
    interface Array<T> {
        toObservable(): Observable<T>;
    }
}
