//-------------------------------------------------------------------------------------------
//ES2015
function Animal(tipo){
  if(tipo)  this.tipo = tipo
}

Animal.prototype.obterTipo = function(){
  return this.tipo
}

Animal.prototype.tipo = 'desconhecido'


let cachorro = new Animal('mamifero')
let gato = new Animal('mamifero')
let cobra = new Animal('reptil')
let peixe = new Animal()

// console.log(cachorro.__proto__)
// console.log(peixe.obterTipo())
// console.log(cobra.obterTipo())

//ANOTAR NO CADERNO 
/*
Foi criado um metodo obterTipo dentro da propriedade da funcao Animal, 
que pode ser acessada qualquer momento 


*/
//-------------------------------------------------------------------------------------------
//ES2016
class AnimalC{
  constructor(tipo){
    if(tipo)  this.tipo = tipo
  }

  obterTipo(){
    return this.tipo
  }
}
AnimalC.prototype.tipo = 'desconhecido'


let animal = new AnimalC('anfibio')
let sapo = new AnimalC()


console.log(animal)
console.log(gato)
console.log(animal.obterTipo())
console.log(gato.obterTipo())
console.log(typeof Animal)
console.log(typeof AnimalC)
console.log('--------------------------------')
console.log(sapo.obterTipo())
