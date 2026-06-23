let str="raghula"
let ch = str.split("")
for(let i=0;i<ch.length;i++){
    for(let j=i+1;j<ch.length;j++){
        if(ch[i]>ch[j]){
            let temp = ch[i]
            ch[i]=ch[j]
            ch[j]=temp
        }
    }
}
for(let k=0;k<ch.length;k++){
    if(ch[k]===0||ch[k]!=ch[k-1]){ //to print without duplicate characters
        console.log(ch[k]+" ")
    }

}