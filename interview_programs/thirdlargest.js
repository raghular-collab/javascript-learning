let num = [1,4,5,7,9]
let lar = num[0]
let secondlar = num[0]
let third = num[0]

for(let i=1;i<num.length;i++){
    if(num[i]>lar){
        third=secondlar
        secondlar=lar
        lar=num[i]
    } else if(num[i]>secondlar){
        third=secondlar
        secondlar=num[i]
    }else if(num[i]>third){
        third=num[i]
    }
}
console.log(lar,secondlar,third)