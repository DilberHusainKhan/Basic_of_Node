// Function definition
function fn(){
    console.log("Function Definition");
}
fn();

// functipon Expression
let ExpressionFunction = function fn1(){
    console.log("Function Expression");
}
ExpressionFunction();

// IIFEE  ->> Imediately Invoked Function EXpression
console.log("Before IIFEE");
(function (){
    console.log("IIFEE");
})();
console.log("After IIFEE");

// Anonrmous function
let Anonymous = function (){
    console.log("Anonymous function");
}
Anonymous();