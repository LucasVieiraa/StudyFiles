//METODOS PARA NUMEROS

let n = 1234567.890

console.log(n.toFixed(1))
console.log(n.toPrecision(3))

n = 12.34567
console.log(n.toExponential())
console.log(n.toExponential(4))

n = 15
console.log(n.toString())
console.log(n.toString(2))
console.log(15 .toString(2))
console.log(15 .toString(16))

n = 123456.789

console.log(n.toLocaleString())
console.log(n.toLocaleString('pt-BR'))
console.log(n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
console.log(n.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
console.log(n.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'}))

//toFixed(): Muda as casas decimais de um numero, transforma em string

//toPrecision(): Muda as quantidades de digitos numero inteiro, transforma em string

//toExponential(): Tranforma o numero em notacao cientifica

//toString(): Tranforma o numero em string
//toString(2): Tranforma o numero em binario usando o parametro 2. Ex: 15 .toString(2) //retorna 1111
//toString(16): Tranforma o numero em hexadecimal usando o parametro. Ex: 15 .toString(16) //retorna f

//toLocaleString(): Formata o numero de acordo com o parametro. 
//Exemplo padrao Brasileiro: (123456.789).toLocaleString('pt-BR')//retorna 123.456,789 
//                                  Exemplo moeda:
//REAL: (123456.789).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})//retorna R$ 123.456,79
//DOLAR: (123456.789).toLocaleString('en-US', {style: 'currency', currency: 'USD'})//retorna $123,456.79
//EURO: (123456.789).toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'})//retorna  123 456,79 €