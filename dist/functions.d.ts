interface addTwoNumbers {
    (firstNumber: number, secondNumber: number): number;
}
declare type addThreeNumbers = (firstNumber: number, secondNumber: number, thirdNumber: number) => number;
declare const add2ImplFnExpr: addTwoNumbers;
declare const add2ImplArrowFn: addTwoNumbers;
declare const add3ImplArrowFn: addThreeNumbers;
declare function fnThatReturnsNothing(): void;
