let num = [1,4,5,7]
let lar = num[0]
let temp = num[0]

for(let i=1;i<num.length;i++){
    if(num[i]>lar){
        temp = lar
        lar = num[i]
    }
}
console.log(lar,temp)