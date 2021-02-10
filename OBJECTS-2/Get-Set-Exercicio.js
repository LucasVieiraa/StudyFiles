/*

  Exercicio 
  1 - Criar um obj chamado produto
  2 - produto deve conter uma unica propriedade chamada quantidade
  3 - quantidade deve estar encapsulada e aceitar apenas numeros maiores que 0
  4 - Criar um contador para cada vez que o usuario consultar a quantidade
      Ex: console.log(produto.quantidade)//Retorna: 'A quantidade foi consultada X vezes'  
  5 - Nao podera haver variaveis no escopo global

*/
  ;(function(){

    let _quantidade = 0
    let contador = 0

    this.produto = {
      nome: 'batata',

      get quantidade(){
        console.log(`           Produto: ${this.nome}, quantidade: ${_quantidade}
        A quantidade foi consultada ${++contador} vez${contador > 1 ? 'es': ''}`)
      },
    
      set quantidade(valor){
        if(valor > 0){
          _quantidade = valor
        } else {
          throw new Error('"quantidade" must be greater than 0')
        }
      }
    }
    //this.produto = produto
  })();