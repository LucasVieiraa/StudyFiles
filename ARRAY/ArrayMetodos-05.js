let arr = [1, 2, 3, 4, 5];
//___________________________________________________________________________
//REVERSE()
arr.reverse();
 console.log(arr);

//___________________________________________________________________________
//REDUCE()
let soma = arr.reduce(function(acumulador, atual){
        return acumulador + atual
})
console.log(soma)

//Primeira interacao acumulador= 1, atual= 2, retorna= 3
//Segunda interacao acumulador= 3, atual= 3, retorna= 6
//Retorna: 6
//Acumulador (acc) // Valor Atual (cur) // Index Atual (idx) // Array original (src)
//___________________________________________________________________________


//reverse()//Inverte a ordem da array original
//reduce()//Retorna um unico valor
console.log('______________________________________')

//_______________________________________________________________________________
//Contando as iniciais dos nomes usando reduce()
const nomes = ['Daniel', 'Maria', 'Joana', 'Joao'];

let nomesOrdem = nomes.reduce(  function(nomes, nomeAtual){
 let firstLetter = nomeAtual[0];
 console.log(firstLetter)
  if(nomes[firstLetter]){
   nomes[firstLetter]++
}
  else{
   nomes[firstLetter] = 1
}
return nomes 
}, {}    )

console.log(nomesOrdem);
//_______________________________________________________________________________
