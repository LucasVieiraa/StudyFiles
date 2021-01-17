   let arr = [4, 5, 1, 20, 35, 4, 5];
//___________________________________________________________________________
//IDEXOF()
console.log(arr.indexOf(5));

//___________________________________________________________________________
//LASTINDEXOF()
console.log(arr.lastIndexOf(5));

//___________________________________________________________________________
//INCLUDES()
console.log(arr.includes(5));

//___________________________________________________________________________
//FIND()
console.log(arr.find(function(el){
    return el > 10;
}))

//___________________________________________________________________________
//FINDINDEX()
console.log(arr.findIndex(function(el){
    return el > 10
}))
//___________________________________________________________________________

//indexOf()//Retorna o indice do valor buscado na array, caso o valor nao exista o retorno e sempre -1 
//lastIndexOf()//Retorna o indice do ultimo valor buscado na array, caso o valor nao exista o retorno e sempre -1 
//includes()//Retorna true se o valor existir na array, e false se nao existir
//find()//Retorna o primeiro elemento que foi especificado, caso nao exista o retorno e undefined
//findIndex()//Retorna o Indice do primeiro elemento que foi especificado, caso nao exista o retorno e -1