const Contador  = (function(){
  let SYMBOL = Symbol()//Symbol global para as classes
  let SYMBOLN = Symbol()//Symbol global para as classes
  return class {
    constructor(){
      this[SYMBOL] = 0
      this[SYMBOLN] = ""
    }

    increment(){
      this[SYMBOL]++
    }

    get contador(){
      return console.log(`${this[SYMBOLN]}: ${this[SYMBOL]}`)
    }
////////////////////////////////////////////
    get nameG(){
      return this[SYMBOLN]
    }

    set nameS(newName){
      this[SYMBOLN] = newName
    }
  }

})(); 

const teste = new Contador()

 teste.nameS = "Teste"
 teste.increment()
 teste.increment()
 teste.increment()
 teste.contador

  console.log('')

const lucas = new Contador()

 lucas.nameS = "Lucas"
 lucas.increment()
 lucas.increment()
 lucas.increment()
 lucas.increment()
 lucas.increment()
 lucas.increment()
 lucas.increment()
 lucas.increment()
 lucas.increment()
 lucas.contador
