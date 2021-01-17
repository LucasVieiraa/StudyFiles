//ANOTAR NO CADERNO
let obj = {
    nome: 'Lucas',
    idade: 19
};

let obj2 = {
    nome: 'Lucas',
    idade: 19
};

let {nome, idade} = obj
console.log(nome)
console.log(idade)

//este metodo extrai as informacoes de um objeto e armazena em uma variavel utilizando o mesmo nome
//E obrigatorio para extracao o mesmo nome

let {nome: exemplo} = obj2
console.log(exemplo)

let {idade: batata} = obj
console.log(batata)

//Para armazenar com outro nome de variavel e necessario
//utilizar a ordem: let {nomeDaPropriedade : nomeDesejado} = nomeDoObjeto