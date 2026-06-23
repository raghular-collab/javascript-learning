let str="ind,ger,ind,ger"
let ch=str.split(",")
for(let i=0;i<ch.length;i++){
    let count =1;
    if(ch[i]===''){
        continue
    }
    for(let j=i+1;j<ch.length;j++){
        if(ch[i]===ch[j]){
            count++
            ch[j]=''
        }
    }
    console.log(ch[i]+":"+count)
}

