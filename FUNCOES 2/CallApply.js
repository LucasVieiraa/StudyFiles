//ANOTAR NO CADERNO OS METODOS CALL E APPLY
//call - este metodo executa uma funcao onde nos parametros e passado um objeto de forma com que seja alterado 
//o escopo do this dentro da funcao
//Ex:
  function teste(str, n){
    console.log(this.exemplo)
    console.log(str, n)

  };

  teste.call({exemplo: 'Lucas'}, 'Vieira', 19)
  teste.call({exemplo: 'Lucas'}, ...['Vieira', 19])//maneira usando spread operator 

//apply - mesmo que o call, porem os parametros sao passados dentro de uma array
//Ex:
  function teste2(modelo, ano){
    console.log(this.carro)
    console.log(modelo, ano)

  };

  teste2.apply({carro: 'Ferrari'}, ['enzo', 2002])

//bind - retorna uma nova funcao armazenada dentro de uma variavel
//Ex: 
  const x = teste.bind({exemplo: 'Lucaaaas'})

  x('abc', 123)
  teste('TESTE', 1212)