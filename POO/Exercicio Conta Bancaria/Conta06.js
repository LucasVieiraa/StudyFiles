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
      throw new Error(`maximum amount per withdrawal: R$${this.limiteSaque}`)
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

//_______________________________________________________________________________________________________________________
//                                              Cliente(Juridico)                                                      \\

  class CLienteJ extends Cliente {
    constructor(nome, documento){
      super(nome, documento, 'CNPJ')
    }
  }

//_______________________________________________________________________________________________________________________
//                                                Criando Contas                                                       \\

//Para clientes Juridicos => const nomeExemplo01 = new ClienteJ('Maria', '122.133.144/3000-01')
//Para clientes Fisicos => const nomeExemplo02 = new ClienteF('Lucas', '12.133.144-30')

//Para criar conta poupanca => const contaExemplo01 = new ContaPoupanca(nomeExemplo01, numeroQualquer)
//Para criar conta corrente => const contaExemplo02 = new ContaCorrente(nomeExemplo02, numeroQualquer)

//Conta Corrente => limite por saque = 1000, limite disponivel = 2000
//Conta Poupanca => sem limite de saque, limite disponivel = 0

//Para transferencia => Transferir.execute(contaOrigem, contaDestino, valor)
//contaOrigem.sacar(valor)    
//contaDestino.depositar(valor)

const lucas = new ClienteF('Lucas Gomes', '12.133.144-30')
const penny = new CLienteJ('Penny da Silva', '122.133.144/3000-01')

const contaCorrenteLucas = new ContaCorrente(lucas, 01)
const contaPoupanca = new ContaPoupanca(penny, 02)



