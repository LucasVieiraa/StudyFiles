class Contador {
  contador = 0
  increment(){
    this.contador++
    console.log(this.contador)
  }
}


let c1 = new Contador()
c1.increment()
console.log(c1.contador)
console.log(c1)