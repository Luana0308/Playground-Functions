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
  let phoneNumber = ""
  for(i=0; i<numbertell.length; i+=1){
    if(numbertell[i] > 9 || numbertell[i] < 0){
      return "Não é possivel gerar um numero de telefone com esses valores"
    }
  }
  return phoneNumber
} console.log(generatePhoneNumber([-1,2,-3,4,5,11,1,1,1,2,1]))

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
