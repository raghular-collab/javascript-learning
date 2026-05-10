//Array is a collection of multiple values stored in [] - square brackets

let ar = ["red", "blue", "white", "black", "yellow"];

//push() - adds one or more elements to end of the array
ar.push("pink");
console.log(ar);

//pop() - removes the last element from an array
ar.pop();
console.log(ar);

//unshift() - add one or more elements to the beginning of an Array
ar.unshift("brown");
console.log(ar);

//shift() - removes the element from an array
ar.shift();
console.log(ar);

//sort() - sorts elements of an array in ascending order
ar.sort();
console.log(ar);
//ascending order
let num = [1, 3, 4, 6, 2];
num.sort((a,b) => a-b);
console.log(num);
//decending order
num.sort((a,b)=>b-a);
console.log(num);

//reverse() - reverses the array
ar.reverse();
console.log(ar);

//concat() joins two arrays
let br = ["pink", "purple"];
console.log(ar.concat(br));

//splice() - used to add/remove/replace elements in a array
//remove
ar.splice(3);
console.log(ar);
//add
ar.splice(1,0, "orange");
console.log("splice add :" , ar);
//replace
ar.splice(1,1,"teal");
console.log(ar);

//reduce - applies a function against each element to reduce
console.log(num.reduce((a,b)=>a+b));

//filter - creates a new array with all elements that pass the condition
let num2 = num.filter((num)=> num > 3);
console.log(num2);

//map() - creates a new array with a result of calling function with every element
let map = num.map((num)=>num*2);
console.log(map);
//with string
let map1 = ar.map((ar)=> ar + " is color");
console.log(map1);
