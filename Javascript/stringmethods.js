 let str = "let learn JAVAscript let.      "

console.log(str.length) //returns lenghth of string
console.log(str.toUpperCase()) //returns lowercase letters into uppercase
console.log(str.toLowerCase()) // returns uppercase letters into lowercase
console.log(str.charAt(4)) //returns character at the index
console.log(str.indexOf("r")) //returns the index of the first occurence of a specified substring within a string
console.log(str.lastIndexOf("r")) //returns the index of the last occurence of a specified substring within a string
console.log(str.slice(3,7)) //extracts a section of the specified string
console.log(str.substring(3,7)) //extracts a section of the specified string
console.log(str.replace("let", "lets")) //replaces one string with another
console.log(str.replaceAll("let", "lets")) // replaces all occurence
console.log(str.trim()) //trims whitespaces
console.log("split :"+str.split()) //splits characters/words in a string into a new string

let arr = ["java", "javascript","sql","selenium"]
console.log(arr.join(",")) //joins different strings together
console.log(arr.includes("java")) //determines whether a string contains a specified substring
console.log(arr.concat("html")) //
