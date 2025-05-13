let str = prompt("Enter a paragraph").toLocaleLowerCase()
let pickedWord = prompt("Enter your picked word from given paragraph").toLocaleLowerCase()
let replaceWord = prompt("Enter the word you want to replace with picked word").toLocaleLowerCase()

for(let i = 0; i<str.length; i++){
// console.log(str.slice(i, i + pickedWord.length));
if(str.slice(i, i + pickedWord.length) === pickedWord){
let editedStr = str.replace(pickedWord, replaceWord)
console.log(editedStr);
break
}
}
