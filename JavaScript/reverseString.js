function revString(str){
    var reverse = '';
    for(let index = str.length-1; index >=0; index--){
        reverse+=str[index];
    }
    return reverse;
}
const ps = require("prompt-sync");
const prompt = ps();

let string = prompt("Enter a string: ");
const result = revString(string);
console.log(result);
