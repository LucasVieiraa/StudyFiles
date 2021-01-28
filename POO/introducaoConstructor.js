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
  }

  Cachorro.prototype = new Animal()
  Cachorro.prototype.constructor = Cachorro

  let rex = new Cachorro('Rex', 'mamifero')