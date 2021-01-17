function Teste(name){
    'use strict'
  let _name = name

  this.createdAt = new Date()
  this.updatedAt = null
  this.changeName = function(x){
    if(x){
      _name = name
      this.updatedAt = new Date()
    }
  }
  this.getName = function(){
    return _name
  }
}

const teste1 = new Teste('abc')
//teste1.changeName('novo nome')
//console.log(teste1.getName())
console.log(teste1)
