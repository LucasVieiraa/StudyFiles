//O loop FOR IN serve para percorrer objetos
//______________________________________________
const obj = {
    nome: 'Maria',
    idade: '28',
    email: 'maria@server.com'
};


for(let prop in obj){
    console.log(prop, ':', obj[prop])
}
//______________________________________________