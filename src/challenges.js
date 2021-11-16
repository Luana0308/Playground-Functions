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

// Desafio 7
// consultei o https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript
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
} 

// Desafio 8
//consultei dúvidas no slack da tribo b
function fizzBuzz(number) {
   let resultado =[]
  for(let i=0; i < number.length; i+=1){
    if(number[i] % 3 === 0 && number[i] % 5 !== 0){
      resultado.push ("fizz");
    } 
    else if(number[i] % 5 === 0 && number[i] % 3 != 0){
      resultado.push("buzz")
    }
    else if(number[i] % 5 === 0 && number[i] % 3 === 0){
      resultado.push("fizzBuzz")
    }
    else{
      resultado.push("bug!")
    }
  }
  return resultado
}

// Desafio 9 
// material usado https://www.w3schools.com/jsref/jsref_replace.asp
function encode(frase) {
  let result = frase
  for(let i=0; i<= frase.length; i+=1){
    if(result[i] === "a"){
      result = frase.replace(/a/g,1)
    }
    else if (result[i] === "e"){
      result = result.replace(/e/g,2)
    }
    else if(result[i] === "i"){
      result = result.replace(/i/g,3)
    }
    else if(result[i] === "o"){
      result = result.replace(/o/g,4)
    }
    else if(result[i] === "u"){
      result = result.replace(/u/g,5)
    }
  }
  return result
} 

function decode(frase2) {
  let resultado = frase2
  for(let i=0; i <= frase2.length; i+=1){
    if(frase2[i]=== "1"){
      resultado = resultado.replace(/1/g,"a")
    }
    else if(frase2[i] === "2"){
      resultado = resultado.replace(/2/g,"e")
    }
    else if(frase2[i] === "3"){
      resultado = resultado.replace(/3/g,"i")
    }
    else if(frase2[i] === "4"){
      resultado = resultado.replace(/4/g,"o")
    }
    else if(frase2[i] === "5"){
      resultado = resultado.replace(/5/g, "u")
    }
  }
  return resultado
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
