// Desafio conta bancaria
/*
5. Polimorfismo
  - Criar uma classe especializada em transcferir.
    Esta classe tera um unico metodo execute(contaOrigem, contaDestino, valor).
    Tanto contaOrigem quento contaDestino precisam ser instancias de ContaBancaria.
    Tanto CC quanto CP tem o metodo sacar(), que tem implementacoes diferentes.
    Mas como sabemos que contaOrigem e contaDestino possuem o metodo sacar,
    independente se for CC ou CP podemos chamar esse metodo.
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

  get dadosCliente(){
    return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
  }

  depositar(valor){
    if(valor){
      let saldoAtual = this.saldo += valor
      console.log(`    ${this.dadosCliente}. 
      Updated balance: R$${saldoAtual}`)
    }
  }

  sacar(){
    throw new Error('method sacar() needs to be implemented')
  }

}

//_______________________________________________________________________________________________________________________
//                                                Conta Corrente                                                       \\                                                                                        

class ContaCorrente extends ContaBancaria {
  constructor(cliente, numero){
    super(cliente, numero)
    this.limiteSaque = 1000 //Valor maximo por saque
    this.limiteDisponivel = 2000 //Valor maximo disponivel da conta
    console.log(`Open account "Conta Corrente", maximum amount per withdrawal: R$${this.limiteSaque} `)
  }

  sacar(valor){
    let disponivel = this.saldo + this.limiteDisponivel

    if(valor > disponivel) throw new Error('Maximum limit reached')

    if(valor && valor <= this.limiteSaque) {
      let saldoAtual = this.saldo -= valor
      console.log(`    ${this.dadosCliente}. 
      Updated balance: R$${saldoAtual}`)
    } else {
      console.log(`maximum amount per withdrawal: R$${this.limiteSaque}`)
    }
  }

}


//_______________________________________________________________________________________________________________________
//                                                Conta Poupanca                                                       \\

class ContaPoupanca extends ContaBancaria {
  constructor(cliente, numero){
    super(cliente, numero)
    this.aniversario = Date.now()
    this.limiteDisponivel = 0 //Valor maximo disponivel da conta
    console.log('Open account "Conta Poupanca"')
  }

   sacar(valor){
    let disponivel = this.saldo + this.limiteDisponivel

    if(valor > disponivel) throw new Error('Maximum limit reached')

    if(valor) {
      let saldoAtual = this.saldo -= valor
      console.log(`    ${this.dadosCliente}. 
      Updated balance: R$${saldoAtual}`)
    } else {
      throw new Error('Please insert all fields')
    }
  }

}
//_______________________________________________________________________________________________________________________
//                                                   Transferir                                                        \\
  
  class Transferir {
    static execute(contaOrigem, contaDestino, valor){
      if(!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria){
        throw new Error('all as account must be inherited from ContaBancaria')
      }
      try{
        contaOrigem.sacar(valor)
        contaDestino.depositar(valor)
      } catch(e){
        throw new Error(`Attention!! it was not possible to complete the transaction ${e.message}`)
      }
    }
  }
 

//_______________________________________________________________________________________________________________________
//                                            Cliente(Abstract Class)                                                  \\

  class Cliente {
    constructor(nome, documento, tipoDocumento){
      if(this.constructor === Cliente) throw new Error('Cliente is an abstract class')
      if(!nome || !documento) throw new Error('Please insert all fields')
      this.tipoDocumento = tipoDocumento
      this.nome = nome
      this.documento = documento
    }

  }

//_______________________________________________________________________________________________________________________
//                                               Cliente(Fisica)                                                       \\ 

  class ClienteF extends Cliente {
    constructor(nome, documento){
      super(nome, documento, 'CPF')
    }
  }

  //const cfLucas = new ClienteF('Lucas', '12.133.144-30')
  //const cp1 = new ContaPoupanca(cfLucas, 13);             console.log(cp1.dadosCliente)


//_______________________________________________________________________________________________________________________
//                                              Cliente(Juridico)                                                      \\

  class CLienteJ extends Cliente {
    constructor(nome, documento){
      super(nome, documento, 'CNPJ')
    }
  }

//  const cjMaria = new CLienteJ('Maria', '122.133.144/3000-01')
// const cjVieira = new CLienteJ('Vieira', '111.144.155/3560-02')
// const cpVieira = new ContaPoupanca(cjVieira, '111.144.155/3560-02')
//  console.log(cpVieira)
  

  //const cc1 = new ContaCorrente(cjMaria, 12);             console.log(cc1.dadosCliente)

//_______________________________________________________________________________________________________________________