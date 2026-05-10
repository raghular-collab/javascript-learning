//for in loop - it is used to iterate key (properties) of an object
//for...in loop is mainly used to iterate through: object properties, array indexes
//in arrays it returns indexes of value
//in objects it returns key and value

//Arrays 
let colors = ["red", "blue", "white"];

for (let index in colors) {
    console.log(colors[index]);
}

let color = ["red", "blue", "white"];

for (let index in color) {

    if (index == 2) {
        console.log(colors[index]);
    }
}

//objects
//only key
let person = {
    name: "Raghul",
    age: 28,
    role: "QA Engineer"
};

for (let key in person) {
    console.log(key);
}

//key + value
let person1 = {
    name: "Raghul",
    age: 28,
    role: "QA Engineer"
};

for (let key in person1) {
    console.log(key + " : " + person1[key]);
}