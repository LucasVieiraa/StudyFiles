//                                        VERIFICACAO USANDO OBJ

;(function(){
  let tipoC = ''

  const tiposCpermitidos = {'mamifero': true, 'anfibio': true, 'reptil': true}

  const cachorro = {
    name: 'Rex',
    get tipoC(){
      return tipoC
    },
    set tipoC(_tipoC){
      if(tiposCpermitidos[_tipoC]) tipoC = _tipoC
    }
  }
  this.cachorro = cachorro  //torna acessivel fora da iife
  //window.cachorro = cachorro
})();

//'tipo' esta encapsulado
//__________________________________________________________________________________________________________________
//                                        VERIFICACAO USANDO ARRAY

;(function(){
  let tipoG = ''

  const tiposGpermitidos = ['mamifero', 'anfibio', 'reptil']
  
  const gato = {
    name: 'Mingal',
    get tipoG(){
      return tipoG
    },
    set tipoG(_tipoG){
      if(tiposGpermitidos.indexOf(_tipoG) >= 0) tipoG = _tipoG
    }
  }
  this.gato = gato //torna acessivel fora da iife
})();

//'tipo' esta encapsulado
//__________________________________________________________________________________________________________________
//get => quando chamado se comporta como uma propriedade, mas dentro do obj e uma funcao
