interface Stack<T> {
    stack: T[];
    pop(): T;
    push(item: T): void;
}
declare function Stack<T>(this: Stack<T>): void;
declare const stack: Stack<number>;
