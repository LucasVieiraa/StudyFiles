const pessoa = {
  nome: 'Lucas',
  idade: 19,
  email: 'lucas@server.com'
}
console.log(pessoa);

 for(let prop in pessoa){
     console.log('propriedade:', prop);
     console.log(pessoa[prop]);

 }