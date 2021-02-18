const obj1 = {
  nome: 'Lucas'
}

const obj2 = {
  nome: 'Maria'
}

Object.freeze(obj1)
console.log(Object.isFrozen(obj1))
console.log(Object.isFrozen(obj2))

//Object.isFrozen(obj1)
/*
Retorna true se o obj estiver congelado

*/