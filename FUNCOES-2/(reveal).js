//ANOTAR NO CADERNO (REVEAL)
const calcRevealPattern = (function(){
  let n = 0

  function _checkNumber(n){
    if(typeof n !== 'number'){
      throw TypeError('apenas numeros')
    }
  }
  function somar(_n){
    _checkNumber(_n)
    n += _n
    return this
  }

  function subtrair(_n){
    _checkNumber(_n)
    n -= _n
    return this
  }

  function log(){
    console.log(n)
  }

  return {
    somar,
    subtrair,
    log
  }

})();

 calcRevealPattern.somar(5).somar(7).subtrair(2).log()
//calcRevealPattern.log()
//variavel armazenando uma funcao auto-invocavel(iife), onde encapsula as funcoes somar, subtrair e log