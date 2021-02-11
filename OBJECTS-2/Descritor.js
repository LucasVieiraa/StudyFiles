const pessoa = {
  nome: 'Lucas'
};

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))

Object.defineProperty(pessoa, 'sobrenome', {

  configurable: true,          //true: permite modificacoes na propriedade
  enumerable: true,            //true: mostra no loop for in
  value: 'Gomes Vieira',       //valor da propriedade
  writable: false             //true: permite modificacoes posteriormente no value

})



/*
  Metodo Object.getOwnPropertyDescriptor(obj, prop)
  Retorna as propriendades do objeto especificado
  Ex: Object.getOwnPropertyDescriptor(pessoa, 'nome')

  Metodo Object.defineProperty(obj, prop, {descritor})
  Define uma nova propriedade para um objeto, caso ja exista sera alterado o descritor da mesma,
  propriedades criadas com este metodo vem por padrao todos os descritores como 'false',
  isso significa por exemplo que o valor definido nao pode ser alterado normalmente
  Ex:

      Object.defineProperty(pessoa, 'sobrenome', {

        configurable: true,          //true: permite modificacoes na propriedade
        enumerable: true ,           //true: mostra no loop for in
        value: 'Gomes Vieira',       //valor da propriedade
        writable: false             //true: permite modificacoes posteriormente no value

      })

      pessoa.sobrenome = 'novo sobrenome';  //Nao sera alterado

      
*/