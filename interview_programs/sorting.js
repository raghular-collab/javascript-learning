let num = [10,20,40,30]

for(let i =0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]>num[j]){
            let temp = num[i]
            num[i]=num[j]
            num[j]=temp
        }
    }
}
for(let k=0;k<num.length;k++){
    console.log(num[k]+" ")
}