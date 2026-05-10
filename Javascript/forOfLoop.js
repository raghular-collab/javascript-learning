//for of loop – it is used to iterate values from a collection like array
//for...of loop is used to iterate through: arrays, strings, collections

let colors = ["red", "blue", "white"];

for (let color of colors) {
    console.log(color);
}

let num = [1, 2, 2, 3]
sum = 0;
mul = 0;
div = 0;

for (let nums of num){
    sum = sum + nums;
    console.log(sum)
}
for (let nums of num){
    mul = nums * 2;
    console.log("m :", mul);
}