let str = "I love javascript programming";
let words = str.split(" ");

for(let i = 0; i < words.length; i++) {

    // Even position (2nd, 4th, 6th...)
    if((i + 1) % 2 === 0) {
        words[i] = words[i].split("").reverse().join("");
    }
}

console.log(words.join(" "));