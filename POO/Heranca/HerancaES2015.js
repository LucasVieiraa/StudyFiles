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
  let animal2 = new AnimalC()
  console.log(animal.tipo)
  console.log(animal2.tipo)


    class GatoC extends AnimalC{
      constructor(nome){
        super('mamifero')
        this.nome = nome
      }
    }

    let mingal = new GatoC('mingal')

    console.log(mingal)