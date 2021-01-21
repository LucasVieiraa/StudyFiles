const teste = (function(){
  let n = 0
  return function testeInterno(){
    console.log('teste Interno chamando', ++n)
    return 'retorno de testeInterno ' + n
  }
})();

let str = teste()
teste()
teste()

console.log(str)