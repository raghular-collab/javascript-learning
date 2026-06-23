let str='programming'
let ch = str.split("")
let vc = 0
let cc = 0
for(let i=0;i<ch.length;i++){
    if(ch.indexOf(ch[i]) !== i){   //to ignore duplicate character
        continue
    }
    if(ch[i]==='a'||ch[i]==='e'||ch[i]==='i'||ch[i]==='o'||ch[i]==='u'){
        vc++
    }else{
        cc++
    }
}

console.log(vc,cc)