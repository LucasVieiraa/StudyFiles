//                                          Polyfill sem expressão regular                                          \\

if(!String.prototype.replaceAllPolyfill){
  String.prototype.replaceAllPolyfill = function(busca, substituicao){

    if(!(busca && typeof busca === 'string') || !(substituicao && typeof substituicao === 'string')){
      throw new Error('necessita de dois parametros do tipo string')
    }else{
      return this.valueOf().split(busca).join(substituicao)
    }
  }
}

const a = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
//Substituir dog por monkey
console.log(a.replaceAllPolyfill('dog', 'monkey'))
//console.log(p.replaceAllPolyfill())

const b = 'teste 1 + 1 = 225 e 3 - 1 = 225'
//Substituir 225 por 2
console.log(b.replaceAllPolyfill('225', () => {}))