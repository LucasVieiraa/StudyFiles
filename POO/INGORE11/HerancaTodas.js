//MANEIRA ANTIGA
function Animal(tipo){ 
  if(this instanceof Animal){
    if(tipo) this.tipo = tipo
  } else {
    throw new Error('Animal nao pode ser criado sem o operador "new"')
  }
};

Animal.prototype.obterTipo = function(){
  return this.tipo
}

Animal.prototype.tipo = 'desconhecido'


  // let cachorro = new Animal('mamifero')
  // let gato = new Animal('mamifero')
  // let cobra = new Animal('reptil')
  // let peixe = new Animal()

  // console.log(peixe.tipo)
  // console.log(gato.tipo)
  // console.log(gato.obterTipo())


  function Cachorro(nome){
    this.nome = nome
    Animal.call(this, 'mamifero')//Animal.call(proprio objeto, tipo)
    
  };
  
  Cachorro.prototype = new Animal('mamifero')//define o __proto__ do Cachorro para animal(A funcao construtora do 'Cachorro' passa a ser 'Animal')
  Cachorro.prototype.constructor = Cachorro//Transforma novamente o construtor para 'Cachorro'
  
  let rex = new Cachorro('rex', 'mamifero')
  //console.log(rex.constructor)












  //MANEIRA NOVA 

  class AnimalC{
    constructor(tipo){//'constructor' e a funcao construtora
      if(tipo)  this.tipo = tipo
    }

    obterTipo(){//funcao colocada diratamente na classe
      return this.tipo
    }
  }

  AnimalC.prototype.tipo = 'desconhecido'// propriedades ainda devem ser usadas fora da classe

  let animal = new AnimalC('anfibio')
  let animal2 = new AnimalC()
  console.log(animal.tipo)
  console.log(animal2.tipo)

//toda classe(class) vai precisar de uma funcao construtora



class GatoC extends AnimalC{// o 'extends' realiza a heranca de AnimalC
  constructor(nome){
    super('mamifero')//O mesmo que Cachorro.prototype = new Animal('mamifero') OBRIGATORIO
    this.nome = nome
  }
}

let mingal = new GatoC('mingal')

console.log(mingal)