let arr01 = [1, 2, 3];
let arr02 = [5, 6, 7];
//___________________________________________________________________________
//TOSTRING()
console.log(arr01.toString());

//___________________________________________________________________________
//JOIN()
console.log(arr01.join('-'))

//___________________________________________________________________________
//CONCAT()

let arrConcat = arr01.concat(arr02, 5, 15, 5, 12, ['hello', 'world']);
console.log(arrConcat)
 
//___________________________________________________________________________



//toString//Converte array em string
//join()//Converte array em string, podendo utilizar parametros para separar
//concat()//Concatena arrays em uma so, nao altera as arrays originais  