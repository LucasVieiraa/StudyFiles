//______________________________________________________
//Calcular imc
function aAa(peso, altura, callback){
  if(peso === undefined || altura === undefined){throw Error('Inserir os dois valores')};
  if(typeof peso !== 'number' || typeof altura !== 'number'){throw new Error('Apenas numeros')}
  let total = 0;
  total += peso / altura ** 2;
  if(typeof callback === 'function'){
    return callback(total);
  }
  return total.toFixed(1);
}
//______________________________________________________
//Mensagem imc

function bBb(imc){ 
  if(imc <= 16.9){return 'Muito abaixo do peso';}else
  if(imc <= 18.4){return 'Abaixo do peso';}else
  if(imc <= 24.9){return 'Peso normal';}else
  if(imc <= 29.9){return 'Acima do peso';}else
  if(imc <= 34.9){return 'Obesidade Grau I';}else
  if(imc <= 40){return 'Obesidade Grau II';}else
  {return 'Obesidade Grau III';}
};
//______________________________________________________

//_____________________________________
//          (peso-altura)
let imc = aAa(70, 1.73);
let imc2 = aAa(70, 1.73, bBb)
//_____________________________________
console.log(`IMC: ${imc}, ${imc2}`)
