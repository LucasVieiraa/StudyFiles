// Desafio conta bancaria
/*
4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.
  - Pessoa Física tem documento CPF 
  - Juridica tem documento CNPJ
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
      return console.log(`Saldo atualizado: R$${saldoAtual} |${new Date()}|`)
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

  const cfLucas = new ClienteF('Lucas', '12.133.144-30')
  const cp2 = new ContaPoupanca(cfLucas, 13);             console.log(cp2.dadosCliente)


//_______________________________________________________________________________________________________________________
//                                              Cliente(Juridico)                                                      \\

  class CLienteJ extends Cliente {
    constructor(nome, documento){
      super(nome, documento, 'CNPJ')
    }
  }

  const cjMaria = new CLienteJ('Maria', '122.133.144/3000-01')
  const cjVieira = new CLienteJ('Vieira', '111.144.155/3560-02')
  const cpVieira = new ContaPoupanca(cjVieira, '111.144.155/3560-02')
  

  const cp1 = new ContaPoupanca(cjMaria, 12);             console.log(cp1.dadosCliente)

//_______________________________________________________________________________________________________________________