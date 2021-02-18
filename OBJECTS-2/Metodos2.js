const obj = {
  prop1: 'prop 1',
  prop2: 'prop 2'
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}


Object.freeze(objFreeze) //Nao pode criar, atualizar e remover, ou seja o (obj fica congelado)
//Nao faz nada
Object.seal(objSeal) //Nao pode criar, pode atualizar, mas nao pode remover, ou seja a (unica coisa permitida e a atualizacao do obj)
//objSeal.prop1 = 'teste' <-- permitido
Object.preventExtensions(objPrevent) //Nao pode criar, pode alterar e pode remover, ou seja (NAO podera criar apenas)
//objPrevent.novaProp = 'nova propriedade' <-- nao permitido