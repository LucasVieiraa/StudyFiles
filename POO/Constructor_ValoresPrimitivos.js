//_________________________________________________________________
//Obj do tipo Array

  let arr = [1,2,3]
  let arr2 = new Array(1,2,3)

  console.log(arr instanceof Array)// Retorna true
  console.log(arr2 instanceof Array)// Retorna true

//_________________________________________________________________
//Valores Primitivos

  let n = 10
  let nObj = new Number(10)

  console.log(n instanceof Number)// Retorna false
  console.log(nObj instanceof Number)// Retorna true

//_________________________________________________________________
