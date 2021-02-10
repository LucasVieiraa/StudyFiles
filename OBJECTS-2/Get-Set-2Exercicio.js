/*

  Exercicio 
  1 - Criar um obj chamado pessoa *
  2 - pessoa deve conter uma propriedade(get) chamada usuarios armazenando uma array de strings(nomes) *
  3 - pessoa deve conter uma propriedade(get) chamada ultimoUsuario que deve retornar o ultimo usuario da array 'usuarios' *
  4 - O addUsuarios(set) deve adicionar(push) um nome na array 'usuarios', NAO DEVE SUBSTITUIR
  5 - O addUsuarios(set) so devera adicionar um nome somente se o mesmo nao existir na array
  6 - Nao podera haver variaveis no escopo global

*/

;(function(){

  let _usuarios = ['Lucas', 'Maria']

  this.pessoa = {

    get ultimoUsuario(){
      if(_usuarios.length){
      let ultimoUsuario = _usuarios.length - 1
      return console.log(`Ultimo usuario: ${_usuarios[ultimoUsuario]}`)
      }
    },

    get usuarios(){
      return [..._usuarios]
      //evita alteracoes indesejadas na array 
      //'usuarios' ira retornar uma copia da array '_usuarios'
    },

    set addUsuarios(nome){
      if(_usuarios.indexOf(nome) === -1){
        _usuarios.push(nome)
      }else{
        throw new Error('This name has already been used')
      }
    }
  }
})();