// Desafio conta bancaria
/*
2. Criar duas classes que herdam de ContaBancaria
  - ContaCorrente
    - limite
    - sacar(valor)

  -ContaPoupanca
    - aniversario (marcar a data qua a conta foi aberta)
    - sacar(valor)
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
    //novaConta01.depositar(2)
    //novaConta01.depositar(2)
    //novaConta01.depositar(2)
    //novaConta01.depositar(2)
    //novaConta01.depositar(2)
    //novaConta01.depositar(2000)
    //novaConta01.sacar(26)
    //novaConta01.sacar(2000)
    //novaConta01.sacar(1000)
    //novaConta01.sacar(3)
    //novaConta01.sacar(35)
    //novaConta01.sacar(35)
    //novaConta01.sacar(35)
    //novaConta01.sacar(3500)
    //novaConta01.sacar(35)
    //console.log(novaConta01)
// novaConta01.sacar(1020)//Limite  ok
// novaConta01.sacar(35)//Sacar  ok

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

 const cp1 = new ContaPoupanca('Lucas Gomes', 321)
 
