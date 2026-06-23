let num =153
let sum=0
let temp=num
while(temp>0){
    digit=temp%10
    sum=sum+(digit*digit*digit)
    temp=Math.floor(temp/10)   //Math.floor() remove decimal as javascript doesnot remove natively
}
if(sum===num){
    console.log('arms')
}else{
    console.log('not arms')
}