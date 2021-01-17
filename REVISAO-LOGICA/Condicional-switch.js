
let diasSemana = 2;
let msg = '';

switch(diasSemana){
    case 0: msg += 'Domingo'
      break;

    case 1: msg += 'Segunda'
      break;

    case 2: msg += 'Terca'
      break;

    case 3: msg += 'Quarta'
      break;

    case 4: msg += 'Quinta'
      break;

    case 5: msg += 'Sexta'
      break;

    case 6: msg += 'Sabado'
      break;
        default: msg += '--' 
}
console.log(`Hoje e: ${msg}`)