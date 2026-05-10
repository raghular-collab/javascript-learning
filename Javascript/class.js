//Class - is a template used to create objects, which groups data and behaviour into a single unit

class classes{
    add(a, b){
        let c = a+b;
        console.log(c);
        return c;
        
    }
    mul(a,b){
        let c = a*b;
        console.log(c);
        return c;
    }
}

let ad = new classes();
ad.add(4,5);
ad.add(4,7);
ad.mul(2,6);

class reverse{
    rev(word){
        let reve = "";
        for(let i=word.length -1;i>=0;i--){
            reve = reve + word.charAt(i);
            
        }
        console.log(reve);
    }
}
let rever = new reverse();
rever.rev("raghul");
rever.rev("Automation");