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
console.log(peixe.obterTipo())