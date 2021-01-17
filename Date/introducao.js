const data = new Date()

console.log(data.getDay())//Dia da semana representado por numeros
console.log(data.getDate())//Dia do Mes
console.log(data.getMonth())//Mes representado por numeros
console.log(data.getTime())//Timestamp
console.log(data.getFullYear())//Ano atual
console.log(data.getHours())//Horario da regiao
console.log(data.getUTCHours())//Horario Universal
console.log('---------------------------------')
console.log(data.toString())//Data em string
console.log(data.toDateString())//Data em formato de string
console.log(data.toISOString())//Data em formato ISO
console.log(data.toLocaleDateString())//Data localizada
console.log(data.toLocaleString())//Data localizada e horario
console.log(data.toUTCString())//Horario Universal em string