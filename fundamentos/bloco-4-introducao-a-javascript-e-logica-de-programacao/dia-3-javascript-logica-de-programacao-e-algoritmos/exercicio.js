let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];

for (index = 0; index < array.length - 1; index += 1) {
    let comparator = array[index + 1];
    if (comparator.length > biggerWord.length) {
        biggerWord = comparator;
    }
    if (comparator.length < smallerWord.length) {
        smallerWord = comparator;
    }
}
console.log ("a maior palavra é: ", biggerWord);
console.log ("a menor palavra é: ", smallerWord);