function Cachorro(name){
      'use strict'
  let position = 0

  this.nome = name

  this.latir = function(){ 
    console.log(this.nome, 'esta latindo')
  }

  this.andar = function(distance){
    position += distance
      console.log(this.nome, 'andou:', distance, 'mts')
      console.log('A posicao atual e:', position, 'mts')
  }

}

  const rex = new Cachorro('rex')
  const toto = new Cachorro('toto')
  const laica = new Cachorro('laica')

  console.log(rex)
  rex.latir()
  rex.andar(5)
  rex.andar(10)

  console.log('---------------------------')

  toto.andar(3)

  console.log('---------------------------')

  laica.andar(-16)
  laica.andar(15)