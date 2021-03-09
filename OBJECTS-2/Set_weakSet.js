const arr = [1,2,3,4,2,3,5]

//________________________________________________________________________________
// SET - Estrutura de dados com valores unicos
// Aceita valores primitivos e outros
//Nao coloca valores repetidos
  const _set = new Set() 

  _set.add(2)
  _set.add(1)
  _set.add(2)
  _set.add(3)//Adiciona um valor
  _set.add(4)
  _set.delete(4)//Deleta um valor
  _set.has(4)//Verifica se existe um valor especificado(Boolean)

  console.log(_set.size)//.size: como um length para array
  console.log('______________')

  for(let i of _set.keys()){
    console.log('keys:',i)
  }

  for(let i of _set.values()){
    console.log('values:',i)
  }
//________________________________________________________________________________
// WEAKSET 
//Nao aceita valores primitivos
//Nao aceita loops

const _weakset = new WeakSet()

;(function(){
  let obj1 = {foo: "bar"}
  let obj2 = {foo2: "bar2"}

  _set.add(obj1)
  _weakset.add(obj2)

})();

