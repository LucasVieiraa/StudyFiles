// Desafio conta bancaria
/*
3. Criar classe Cliente e compor as classes concretas
  - nome
  - documento
*/

//_______________________________________________________________________________________________________________________
//                                          ContaBancaria(Abstract Class)                                              \\

class ContaBancaria {
  constructor(cliente, numero){
    if(this.constructor === ContaBancaria){
      throw Error('ContaBancaria is an abstract class')
    }
      this.cliente = cliente
      this.numero = numero
      this.saldo = 100
  }

  depositar(valor){
    if(valor){
      let saldoAtual = this.saldo += valor
      return console.log(`Saldo atualizado: R$${saldoAtual} |${new Date()}|`)
    }
  }

  sacar(){
    throw new Error('method sacar() needs to be implemented')
  }

}

//const pessoa = new ContaBancaria()//ok

//_______________________________________________________________________________________________________________________
//                                                Conta Corrente                                                       \\                                                                                        

class ContaCorrente extends ContaBancaria {
  constructor(cliente, numero){
    super(cliente, numero)
    this.limiteSaque = 1000 //Valor maximo por saque
    this.limiteDisponivel = 2000 //Valor maximo disponivel da conta
    console.log(`Conta Corrente aberta, valor maximo por saque: R$${this.limiteSaque} `)
  }

  sacar(valor){
    let disponivel = this.saldo + this.limiteDisponivel

    if(valor > disponivel) throw new Error('Limite maximo atingido ')

    if(valor && valor <= this.limiteSaque) {
      let saldoAtual = this.saldo -= valor
      return console.log(`${this.cliente}, seu saldo atualizado e: R$${saldoAtual}`)
    } else {
      console.log(`atencao, seu valor maximo por saque: R$${this.limiteSaque}`)
    }
  }

}

    //const novaConta01 = new ContaCorrente('Lucas', 123)

//_______________________________________________________________________________________________________________________
//                                                Conta Poupanca                                                       \\

class ContaPoupanca extends ContaBancaria {
  constructor(cliente, numero){
    super(cliente, numero)
    this.aniversario = Date.now()
    this.limiteSaque = 1000 //Valor maximo por saque
    this.limiteDisponivel = 2000 //Valor maximo disponivel da conta
  }

   sacar(valor){
    let disponivel = this.saldo + this.limiteDisponivel
    
    if(valor > disponivel) throw new Error('Limite maximo atingido ')

    if(valor && valor <= this.limiteSaque) {
      let saldoAtual = this.saldo -= valor
      return console.log(`${this.cliente}, seu saldo atualizado e: R$${saldoAtual}`)
    } else {
      console.log(`atencao, seu valor maximo por saque: R$${this.limiteSaque}`)
    }
  }

}

 
 
//_______________________________________________________________________________________________________________________
//                                                    Cliente                                                          \\

  class Cliente {
    constructor(nome, documento){
      this.nome = nome
      this.documento = documento
    }

  }

const lucas = new Cliente('Lucas', 1)
const maria = new Cliente('Maria', 1)

const cp1 = new ContaPoupanca(lucas, 12);             console.log(cp1)
const cp2 = new ContaPoupanca(maria, 13);             console.log(cp2)

const cc1 = new ContaCorrente(lucas, 22);             console.log(cc1)
const cc2 = new ContaCorrente(maria, 23);             console.log(cc2)


//_______________________________________________________________________________________________________________________
