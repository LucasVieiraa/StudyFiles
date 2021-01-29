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


  function Cachorro(nome){
    this.nome = nome
    Animal.call(this, 'mamifero')
    
  };
  
  Cachorro.prototype = new Animal('mamifero')
  Cachorro.prototype.constructor = Cachorro
  
  let rex = new Cachorro('rex', 'mamifero')
 




