let str = 'raghular'
let w = str.split('')
for(let i=0;i<w.length;i++){
    let count =1;
    for(let j=i+1;j<w.length;j++){
        if(w[i]===w[j]){
            count++
            w[j]=0
        }
    }
    if(w[i] != 0){
        console.log(w[i]+":"+count)
    }
}