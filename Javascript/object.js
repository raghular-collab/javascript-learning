//Object - object in JavaScript is a collection of properties stored as 
//key : value pairs, used to represent real-world entities and organize related data together

//creating object
let person = {
    name: "cole",
    age: 28,
    role: "qa"
};
for(let per in person){
    console.log(per,person[per]);
}

//adding new property
person.maritalstatus = "single";
console.log(person.maritalstatus);

//deleting a property
delete person.age;
console.log(person)

//modify property
person.age = 29;
console.log(person);