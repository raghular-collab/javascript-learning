// Switch statement - is used to check one value against multiple possible cases
//alernatuve multiple else if conditions

let age = 16;

switch(true) {

    case (age === 18):
        console.log("Age allowed");
        break;

    case (age > 20):
        console.log("Age above 20");
        break;

    case (age < 18):
        console.log("Age below 18");
        break;

    default:
        console.log("Invalid age");
}