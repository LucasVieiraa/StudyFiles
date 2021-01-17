
let idade = 18;
let paisPresentes = true;
let bilhete = false;

 const viagem = ((idade >= 18 || paisPresentes) && bilhete)?'Pode viajar':'Nao pode viajar';
  console.log(`Pode viajar ternario: ${viagem}`);

    if(bilhete){
    if(idade >= 18 || paisPresentes){
     console.log('Pode viajar'); 
    }}else{
     console.log('Nao pode viajar')}
    
//----------------------------------------------------------------------------------------------
let n1 = 0;
let n2 = 8;
let media = (n1 + n2) / 2;

if(n1 === 0 || n2 === 0){
console.log('Reprovado');    
}else if(media < 7){
console.log(`Reprovado, sua media e: ${media}`)    
}else{
console.log(`Aprovado, sua media e: ${media}`)    
}

console.log(`A media e: ${media}`);