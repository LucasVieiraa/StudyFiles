// Desafio conta bancaria
/*
1. criar contra abstrata ContaBancaria
  - cliente            - propriedade
  - numero             - propriedade
  - saldo              - propriedade
  - depositar(valor)   - metodo
  - sacar(valor)       - metodo
*/


class ContaBancaria {
  constructor(cliente, numero){
    if(this.constructor === ContaBancaria){
      throw Error('ContaBancaria is an abstract class')
    }
    if(cliente && numero){
      this.cliente = cliente
      this.numero = numero
      this.saldo = 0
    } else {
      throw new Error('Please insert all necessary fields')
    }
  }

  depositar(valor){
    if(valor) console.log(this.saldo += valor)
  }

  sacar(valor){
    if(valor) console.log(this.saldo -= valor)
  }

}

//const pessoa = new ContaBancaria()//ok
