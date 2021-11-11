// Desafio 1
function compareTrue(a,b) {
  if(a ==true && b == true){
    return true
  }
  return false
}

// Desafio 2
function calcArea(x,y) {
  return (x * y)/ 2
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ")
}

// Desafio 4
function concatName(nameList) {
  let firstWord = nameList[0]
  let lastWord = nameList[nameList.length-1]
  let firstWordWithSpace = " " + firstWord
  let result = [lastWord, firstWordWithSpace]
  return result
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
