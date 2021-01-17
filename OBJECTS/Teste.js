// const obj = [
//     {batata: function(){
//        console.log('funcao da batata') 
//     }},
//     {cenoura: function(){
//         console.log('funcao da cenoura')
//     }},
//     {tomate: function(){
//         console.log('funcao do tomate')
//     }}
// ];

// console.log(obj)

const pessoaLucas = {
    nome: 'Lucas',
    idade: 19,
    peso: 71,
    altura: 1.73,
    imc: function(){
        let imc = this.peso / (this.altura ** 2)
        return imc  
    }
};
console.log(pessoaLucas.nome)
console.log(pessoaLucas.idade)
console.log(pessoaLucas.peso)
console.log(pessoaLucas.altura)
console.log(pessoaLucas.imc())

console.log('-------------------------------')

    const pessoaAbacate = {
        nome: 'Abacate',
        idade: 26,
        peso: 75,
        altura: 1.20,
        imc: function(){
            let imc = this.peso / (this.altura ** 2)
            return imc  
        }
    };

    console.log(pessoaAbacate.nome)
    console.log(pessoaAbacate.idade)
    console.log(pessoaAbacate.peso)
    console.log(pessoaAbacate.altura)
    console.log(pessoaAbacate.imc())



    const abc = {
        obj1: {abc1: 1},
        obj2: {abc2: 2}
    }

    console.log(abc.obj1.abc1)
    console.log(abc.obj2.abc2)