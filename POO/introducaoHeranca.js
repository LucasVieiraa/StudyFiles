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
  // this.constructor = Cachorro
  Object.defineProperty(Cachorro.prototype, 'constructor', {
    value: Cachorro,
    enumerable: true
  })
}

Cachorro.prototype = new Animal()

let rex = new Cachorro('Rex', 'mamifero')

//---------------------------------------------------------------------------------------------------------
//ANOTAR NO CADERNO HERANCA(MANEIRA ANTIGA)
/*
Para herdar tudo de uma funcao, basta chamar a funcao passando o objeto como argumento
 
Ex: function Cachorro(nome, tipo){
      this.nome = nome
      Animal.call(this, tipo)
      this.constructor = Cachorro
    }
A funcao construtora Cachorro esta herdando tudo 

//---------------------------------------------------------------------------------------------------------
///ANOTAR NO CADERNO HERANCA(MANEIRA ESMACSRIPT 2015)

  Object.defineProperty(Cachorro.prototype, 'constructor', {
    value: Cachorro,
    enumerable: false
  })

Define uma propriedade no Cachorro.protoptyper chamada 'constructor', podendo
passar um objeto de configuracao.
  value: valor(Cachorro),
  enumerable: (boolean: true(mostra no loop for in), false(nao mostra no loop for in))

*/