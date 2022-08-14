interface Stack<T> {
  stack: T[];
  pop(): T;
  push(item: T): void;
}

function Stack<T>(this: Stack<T>) {
  this.stack = [];

  this.pop = function (): T {
    const poppedElement = this.stack.shift();
    if (poppedElement) {
      return poppedElement;
    }
    throw Error("No element to pop.");
  };

  this.push = function (item: T): void {
    this.stack.unshift(item);
  };
}

// The as keyword is a Type Assertion in TypeScript.
// It tells the compiler to consider the object as another type than the type the compiler infers the object to be.
const stack: Stack<number> = new (Stack as any)();
stack.push(1);
stack.push(2);
stack.push(3);

try {
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
} catch (e) {
    console.log(`Stack is empty. ${(e as Error).message}`)
}
