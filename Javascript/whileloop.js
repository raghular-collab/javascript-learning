//while loop - runs based on the condition, run only if condition is true
//it checks condition first, if true

let age =  16;
while(age<17){
    console.log("age below 17")
    break;
}

//multiple conditions
let num = 2;
while(num > 1 && num < 10){
    if (num == 4){
        console.log(true);
    }else {
        console.log(false);
    }
    num++;
}