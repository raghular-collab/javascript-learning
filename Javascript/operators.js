let a = 18;
let b = 6;
let age = 16;
let hasID = true;

//Arithmetic Operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("remainder", a % b);
console.log("power of a ", a ** b);

//Increment / Decrement
a++;
console.log("increment ", a);

b--;
console.log("decrement ", b);

//Comparison
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//Strict vs Loosen equality
console.log(18 == "18"); //compares only values not datatypes
console.log(18 === "18"); //compares datatypes

//Logical Operators
console.log(a > b && b < 10);
console.log(a < b || b < 10);
console.log(!(a > b));

//Real condition
console.log(a >= 18 && hasID);
console.log(a>= 18 || hasID);
console.log(!(a>hasID));

//Ternary Operator
console.log(age >= 18 ? "Eligible" : "Not Eligible")
