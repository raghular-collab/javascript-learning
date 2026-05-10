//a loop in javascript is a control structure used to execute a block of code repeatedly based on condition
//for loop - used when the number of iterations is known/ when count is fixed

let word = "hello";
let rev = "";

for (let i = word.length -1;i >= 0;i--){
    rev = rev + word.charAt(i);
}
console.log(rev);
