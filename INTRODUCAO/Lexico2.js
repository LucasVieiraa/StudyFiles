//---------------------------------------------------------------------
//Valido no JS padrao
let xc = 10;
x = 'String';
console.log(xc);

//---------------------------------------------------------------------
//Aspas
let a = 'Teste de "aspas" asd';
console.log(a);

//---------------------------------------------------------------------
//Not a number
console.log(2 * 'String');

//---------------------------------------------------------------------
//This e dinamico
function teste(){
    console.log(this);
};
teste();

//---------------------------------------------------------------------
//This no obj

const teste2 = () => {
    console.log('_______________')
    console.log('teste2');
    console.log(this);
}

//---------------------------------------------------------------------
//This no obj
const obj = {
    n: 10,
    teste,
    teste2
    //Mesma maneira -> teste2: teste
}
obj.teste();
obj.teste2();

//---------------------------------------------------------------------