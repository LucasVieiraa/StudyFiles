//ANOTAR NO CADERNO FACTORY 
//==========================================================================
// const cachorro01 = {
//   name: 'cachorro01',
//   bark(){  },
//   walk(){  },
//   comer(){  }
// };

// const cachorro02 = {
//   name: 'cachorro02',
//   bark(){  },
//   walk(){  },
//   comer(){  }
// };

// const cachorro03 = {
//   name: 'cachorro03',
//   bark(){  },
//   walk(){  },
//   comer(){  }
// };
//==========================================================================
//Factory function(funcao fabrica)
function createDog(name){

  let position = 0

  return {
    name,
    bark(){ 
      console.log(this.name, 'esta latindo')
    },

    walk(distance){
      position += distance
      console.log(this.name, 'andou:', distance, 'mts')
    },

    takePosition(){
      console.log(`a posicao atual de ${this.name} e: ${position}`)
      return position
    }
  }
};

const rex = createDog('Rex')
rex.walk(10)
rex.walk(5)
rex.takePosition()

console.log('----------------------------------')

const toto = createDog('Toto')
toto.walk(20)
toto.walk(-3)
toto.takePosition()
