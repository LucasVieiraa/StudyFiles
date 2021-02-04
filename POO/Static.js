//ES5
  function Animal(){  }

  Animal.prototype.whoAmI = function(){
    return this
  }

  Animal.categoria = 'ser vivo'

  const dog = new Animal()

//ES6
  class Cachorro {
    constructor(nome){
      this.nome = nome
      Cachorro.comer('batata')
      Cachorro.beber('nada')
    }

    static comer(alimento){
      console.log(`esta comendo: ${alimento}`)
      this.beber('agua')//Maneira de chamar um metodo estatico dentro de outro metodo estatico
    }

    static beber(algo){
      console.log(`esta bebendo: ${algo}`)
    }
  }

   const rex = new Cachorro('rex')
  // console.log(rex.beber())


//A palavra chave static define um método estático para a classe. 
//Métodos estáticos não são chamados na instância da classe. 
//Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, 
//como funções para criar ou clonar objetos. 

// static nomeDoMetodo(){...}
