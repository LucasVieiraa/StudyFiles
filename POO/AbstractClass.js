class Animal {
  constructor(tipo){
    if(this.constructor === Animal){
      throw Error("Animal is an abstract class (Animal can only be used as extender)")
    }
    if(tipo) this.tipo = tipo
  }
}


// console.log(animal.comer())
// console.log(animal.tipo)


class Gato extends Animal {
  constructor(nome){
    super('mamifero')
    this.nome = nome
  }

  comer(){
    if(this.tipo)  console.log(`${this.tipo} esta comendo`)
  }

  andar(){
    if(this.nome)  console.log(`${this.nome} esta andando`)
  }
  
}

// const animal = new Animal('mamifero')
const mingal = new Gato('mingal')
