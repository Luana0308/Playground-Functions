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
  return result.toString()
}

// Desafio 5
function footballPoints(wins,ties) {
  wins = wins * 3
  ties = ties * 1
  totalPoints = wins + ties
  return totalPoints
}

// Desafio 6
function highestCount(numberList) {
  numberMax = numberList[0]
for(let i = 1; i <= numberList.length; i +=1){
  if(numberMax < numberList[i]){
    numberMax = numberList[i]
  }
}
  let repetir = 0
for(let index=0; index <=numberList.length; index +=1){
  if(numberMax === numberList[index]){
    repetir += 1
  }
}
return repetir
}

console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

// Desafio 7
function catAndMouse(posicaoMouse,posicaocat1,posicaocat2) {
    let distanciaCat1 = Math.abs(posicaoMouse - posicaocat1)
    let distanciaCat2 = Math.abs(posicaoMouse - posicaocat2)
    let resultado = ""
  if(distanciaCat1 < distanciaCat2){
    resultado = "cat1"
  }else if (distanciaCat1 > distanciaCat2){
    resultado = "cat2"
  } else if(distanciaCat1 === distanciaCat2){
    resultado = "os gatos trombam e o rato foge"
  }
return resultado
} console.log(catAndMouse(1,0,2))

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
