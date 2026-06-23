let num = [1,3,4,5,6]
let windowSum=0
let maxSum=0
let k =3

for(let i=0;i<k;i++){
    windowSum=windowSum+ num[i]
}
maxSum=windowSum

for(let i=k;i<num.length;i++){
    windowSum=windowSum+num[i]-num[i-k]
    maxSum=Math.max(maxSum,windowSum)
}
console.log(maxSum)