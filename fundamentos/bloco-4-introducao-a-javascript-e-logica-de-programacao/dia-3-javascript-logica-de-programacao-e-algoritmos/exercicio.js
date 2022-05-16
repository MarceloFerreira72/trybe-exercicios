let word = 'tryber';
let inverseWord = [];
let back = word.length - 1;

for (let foward = 0; foward < word.length; foward += 1) {
    inverseWord[foward] = word[back];
    back -= 1;
}
inverseWord = inverseWord.join("");
console.log (inverseWord);
