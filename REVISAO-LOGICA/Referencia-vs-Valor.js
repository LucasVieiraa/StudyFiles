//Armazena a referencia
//--------------------------------------
function alteraArray(a){
    a.push('Adicionado')
}
let arr = ['a'];
console.log(arr);
alteraArray(arr);
console.log(arr);
//--------------------------------------
//Armazena o valor 'mensagem'
function alteraPrimitivo(p){
    p += 'adicionado';
}
let msg = 'mensagem';
console.log(msg);
alteraPrimitivo(msg);
console.log(msg);
//--------------------------------------