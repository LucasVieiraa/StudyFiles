//ANOTAR NO CADERNO METODOS DE CRIAR FUNCOES DENTRO DE OBJETOS 
//Metodo antigo
function latir(){
  console.log(this.name, 'fala: au au')
}

function miar(){
  console.log(this.name, 'fala: miau')
}


const dog = {
  name: 'rex',
  falar: latir
}

const cat = {
  name: 'mingau',

  falar: function(){//metodo antigo
    console.log(this.name, 'fala: miau')
  }

}


dog.falar()
cat.falar()

//------------------------------------------------------
//metodo novo
//a partir do ecmascript 2015 pode utilizar o novo metodo de criar funcoes dentro de objetos.
const humano = {
  name: 'Lucas',

  falar(){//metodo novo
    console.log('ola')
  },
  
  falar2(){//metodo novo
    console.log('mundo')
  }

}
humano.falar()
humano.falar2()
