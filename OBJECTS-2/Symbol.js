//_______________________________________________________________________________________________________________
//TIPO PRIMITIVO
//Nao usar o operador 'new'
//Symbol possui uma chave unica
//Em objetos pode ser usado para encapsular, porem nao deixa a propriedade totalmente privada
//Ou seja, o melhor metodo de encapsular as propriedades e usando as fucoes 

  const NOME = Symbol()
  console.log(typeof NOME)//symbol

  let n = 0
  const user = {
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    [NOME]: 'Lucas - Symbol',
    nome: 'Lucas - String',
  }
  
//[]: maneira de usa os colchetes na propriedade de um objeto

//-------------------------------------------------------------------------------------

  user.nome = 'novo nome'//Nao altera o Symbol

//-------------------------------------------------------------------------------------

  let acessarSymbol = Object.getOwnPropertySymbols(user)
  console.log(user[acessarSymbol[0]])
  user[acessarSymbol[0]] = 'novo nome Symbol'//Altera o value do Symbol
  //user[NOME]: Acessa o value da propriedade symbol

//-------------------------------------------------------------------------------------

  console.log(user)
//_______________________________________________________________________________________________________________
