class Contador {

  constructor(){
    this.SYMBOL = Symbol()
    this.contador = 0 //Contador comum
    this[this.SYMBOL] = 0 //Contador "encapsulado"
    
  }

  increment(){
    this.contador++
    this[this.SYMBOL] = this[this.SYMBOL] + 1 
    console.log(this.contador,"comum")
    console.log(this[this.SYMBOL],"encapsulado")

  }
}

let c1 = new Contador()

c1.increment()
c1.increment()
c1.increment()
//console.log(c1.contador)
//console.log(c1)