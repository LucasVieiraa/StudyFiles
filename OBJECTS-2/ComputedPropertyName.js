//_____________________________________________________________________________
//                         COMPUTED PROPERTY NAME
//Basta usar [nomeDaPropriedade] para inserir o nome da propriedade e ate
//realizar uma conta ou concatenacao
let n = 0
const user = {
  ['teste' + (++n)]: 'teste' + n,
  ['teste' + (++n)]: 'teste' + n,
  ['teste' + (++n)]: 'teste' + n
}

console.log(user)
//_____________________________________________________________________________
/*

*/