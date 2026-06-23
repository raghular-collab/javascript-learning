let num=56789
let list =[]

let div = 10000
while(div>=1){
    let digit=Math.floor(num/div)
    list.push(digit*div)

    num=num%div
    div =div/10
}
console.log(list)