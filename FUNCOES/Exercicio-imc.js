//Funcao para calcular IMC
//______________________________________________________________
//FUNCAO 1
// Receber e calcular o IMC = peso / altura ao quadrado
// Gerar erro se nao receber os dois parametros 
// Gerar erro se receber parametros nao numericos 
//______________________________________________________________
//FUNCAO 2
// Receber o resultado do IMC
// Retornar uma string (Tabela de classificacao do peso)
// Gerar erro se nao receber o resultado do IMC
// Gerar erro se receber parametros nao numericos
//______________________________________________________________
//Tabela IMC
// Muito abaixo do peso------------16 a 16,9 kg/m2
// Abaixo do peso------------------17 a 18,4 kg/m2
// Peso normal---------------------18,5 a 24,9 kg/m2
// Acima do peso-------------------25 a 29,9 kg/m2
// Obesidade Grau I----------------30 a 34,9 kg/m2
// Obesidade Grau II---------------35 a 40 kg/m2
// Obesidade Grau III maior que----40 kg/m2
//______________________________________________________________

function aAa(peso, altura){
  if(peso === undefined || altura === undefined){throw Error('Inserir os dois valores')};
  if(typeof peso !== 'number' || typeof altura !== 'number'){throw new Error('Apenas numeros')}
  let total = 0;
  total += peso / altura ** 2;
  return total.toFixed(1);
}

function bBb(imc){ 
  if(imc <= 16.9){return 'Muito abaixo do peso';}else
  if(imc <= 18.4){return 'Abaixo do peso';}else
  if(imc <= 24.9){return 'Peso normal';}else
  if(imc <= 29.9){return 'Acima do peso';}else
  if(imc <= 34.9){return 'Obesidade Grau I';}else
  if(imc <= 40)  {return 'Obesidade Grau II';}else
  {return 'Obesidade Grau III';}
};
//_____________________________________
//          (peso-altura)
let imc = aAa(150, 1.70);
//_____________________________________
console.log(`IMC: ${imc}, ${bBb(imc)}`);
