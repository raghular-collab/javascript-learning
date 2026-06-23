let str = 'programming'

for(let i=0;i<str.length;i++){
    let count =0
    for(j=0;j<str.length;j++){
        if(str.charAt(i)===str.charAt(j)){
            count++
        }
    }
    if(count===1){
        console.log(str.charAt(i))
        break
    }
}
