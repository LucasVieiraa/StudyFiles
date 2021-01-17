////////////////////////////////////////////////////////////////////////////////////////
//Exemplo de map()
const produtos = [
    {
        nome: 'notebook',
        preco: 2100
    },
    {
        nome: 'smartphone',
        preco: 400
    }
];

const precosConvertidos = produtos.map(p => p.preco * 4)
// const precosConvertidos = produtos.map(function(a){return a.preco * 4})

console.log(precosConvertidos)
////////////////////////////////////////////////////////////////////////////////////////
//Exemplo de reduce()

const mercado = [
    {
        nome: 'arroz',
        preco: 50
    },
    {
        nome: 'feijao',
        preco: 60
    },
    {
        nome: 'batata',
        preco: 20
    }
];

const total = mercado.reduce(function(a, b){return a + b.preco}, 0);
console.log(total)

////////////////////////////////////////////////////////////////////////////////////////
//Exemplo juntando map() e reduce()
//Converter o dolar em real e somar o total da compra

const mercadoUSA = [
    {
        nome: 'arroz',
        preco: 5
    },
    {
        nome: 'feijao',
        preco: 6
    },
    {
        nome: 'batata',
        preco: 2
    }
];
//_____________________________________________________________________________________

const converterReal = mercadoUSA.map(function(dolar){
  return dolar.preco * 4
 });

 const compraTotal = converterReal.reduce(function(a, b){
     return a + b;
 })
//_____________________________________________________________________________________

//Mesmo codigo usando arrow function
const _total = mercadoUSA.map(p => p.preco * 4).reduce((a, b) => a + b, 0);

//_____________________________________________________________________________________



 console.log(converterReal)
 console.log(compraTotal)
// console.log(_total)
////////////////////////////////////////////////////////////////////////////////////////