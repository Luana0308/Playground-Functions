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
function generatePhoneNumber() {
  // seu código aqui
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
