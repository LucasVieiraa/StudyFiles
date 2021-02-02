function Animal(tipo){
  if(tipo)  this.tipo = tipo
}

Animal.prototype.obterTipo = function(){
  return this.tipo
}

Animal.prototype.tipo = 'desconhecido'


function Cachorro(nome, tipo){
  this.nome = nome
  Animal.call(this, tipo)
  Object.defineProperties(Cachorro.prototype, 'constructor', {
    value: Cachorro,
    enumerable: false
  })
}

Cachorro.prototype = new Animal()

let rex = new Cachorro('Rex', 'mamifero')

//___________________________________________________________________
//hasOwnProperty()
//Verifica se a propriedade faz parte do proprio obj
//Ex:
  for(let prop in rex){
    if(rex.hasOwnProperty(prop)) console.log(prop)
  }
//___________________________________________________________________
//instanceof
//Verifica se faz parte da cadeia de prototipo
//Ex:
  console.log(rex instanceof Animal)
//___________________________________________________________________
//isPrototypeOf()
//Verifica se e prototipo
//Ex:
  console.log(Object.prototype.isPrototypeOf(rex))
//___________________________________________________________________
//getPrototypeOf()
//Retorna o prototipo, o mesmo que (rex.__proto__)
//Ex:
  console.log(Object.getPrototypeOf(rex))
//___________________________________________________________________
