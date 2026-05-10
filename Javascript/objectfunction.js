//object function - A function inside an object is called method 
//-object stores data -> properties
//-Actions -> method & functions

let person = {
    name: "ray", //properties
    age: 28,
    male: function(){
        let reve = "";
        for(let i=this.name.length -1;i>=0;i--){
            reve = reve + this.name.charAt(i);
            
        }
        console.log(reve);
    }
}

person.male();