let str = 'programming'

for(let i=0;i<str.length;i++){
    let isDup=false
    for(let j=0;j<i;j++){
        if(str.charAt(i)===str.charAt(j)){
            isDup = true
            break
        }
    }
    if(isDup){
        console.log(str.charAt(i)+" ")
    }
}