//ANOTAR NO CADERNO DIFERENCA DA FN EXPRESSION PARA A ARROW FN
//-------------------------------------------------------------------------------
//Function expression
function teste(str){
  console.log('function expression teste', str)
  return `fn expression --${str}`
};

const t1 = teste('parametro fn ex')
console.log(t1)

console.log('--------------------------')

//==============================================================================

//Arrow function
const testeArrow = (str) => {
  console.log('Arrow function teste', str)
  return `arrow function --${str}`
};

const t2 = testeArrow('parametro arr fn')
console.log(t2)


const testeArrow2 = () => {
  console.log('teste arrow 2')
  return {
    foo: 'bar'
  }
};

const t3 = testeArrow2()
console.log(t3)
console.log(t3.foo)
console.log(t3['foo'])
console.log('------------------------------------------')

//-------------------------------------------------------------------------------
//Arrow function (retornar Objeto e Hoisting)

//const x = () => {
//  return {
//    asd: '123'
//  }
//}

//para retornar um objeto de maneira literal basta adicionar os parenteses antes dos colchetes
  const x = () => ({
      asd: '123'
    })

  const x1 = x()
console.log(x1.asd)
console.log(x1['asd'])

//Alem disso outra principal diferenca entre as funcoes e que na arrow function nao existe o Hoisting, 
//ou seja a arrow function so podera ser chamada apos sua criacao.
//Na fn declaration o this e dinamico
//Na arrow fn o this e estatico  

//==============================================================================