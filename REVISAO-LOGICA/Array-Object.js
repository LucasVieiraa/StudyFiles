const pessoas = [
    {nome: 'Lucas', idade: 19},
    {nome: 'Joao', idade: 60},
    {nome: 'Maria', idade: 20},
    {nome: 'Crobison', idade: 12}
];

//loop mensagem ex: Lucas tem 19 anos
for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos`); 
}
