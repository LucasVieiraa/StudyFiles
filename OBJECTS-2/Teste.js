;(function(){

  let _usuarios = ['Lucas', 'Maria']

  this.pessoa = {

    get usuarios(){
      return [..._usuarios]
    },

    set addUsuarios(nome){
      if(_usuarios.indexOf(nome) === -1){
        _usuarios.push(nome)
      }
    }
  }
})();