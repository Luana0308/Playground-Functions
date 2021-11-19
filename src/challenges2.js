// Desafio 10
function techList(arrayList, name) {
  arrayList.sort()
  if(arrayList.length === 0){
    return "Vazio!" 
  }
  let arrayObjetc = []
  for(let i=0; i< arrayList.length; i+=1){
    arrayObjetc.push(
      {
      tech: arrayList[i],
      name: name,
    },
    )
  }
  return arrayObjetc
}

// Desafio 11
function generatePhoneNumber(numbertell){
  if(numbertell.length !== 11){
     return "Array com tamanho incorreto."
  }
  for( let i=0; i<numbertell.length; i+=1){
    if(numbertell[i] > 9 || numbertell[i] < 0){
      return "não é possível gerar um número de telefone com esses valores"
    }
   let counterNumber = 0;
    for(let j= 0; j < numbertell.length; j += 1){
      if(numbertell[i] === numbertell[j]){
        counterNumber = counterNumber + 1
      }
      if(counterNumber >= 3){
       return "não é possível gerar um número de telefone com esses valores" 
      }
    } 
  }
  let phoneNumber = numbertell.join("")
  let ddd = phoneNumber.slice(0,2)
  let numberFirst = phoneNumber.slice(2,7)
  let numberFinal = phoneNumber.slice(7,11)
  let finalNumberTell = "(" + ddd + ")" + " " + numberFirst + "-" + numberFinal
  
  return finalNumberTell
}  

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
