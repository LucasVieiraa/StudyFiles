let telefone = '91234-5678' // 9****-**78
let telefone2 = '1624-5862' // 1***-**62

  function mascararTelefone(n){
      let hifem = n.indexOf('-')
      let numeroInicio = n.slice(0, hifem)
      let numeroFinal = n.slice(hifem + 1)
      let doisUltimosNumeros = numeroFinal.slice(-2)
      return `${numeroInicio.charAt(0).padEnd(numeroInicio.length, '*')}-${doisUltimosNumeros.padStart(numeroFinal.length, '*')}`
  };

console.log(telefone, '=>', mascararTelefone(telefone))
console.log(telefone2, '=> ', mascararTelefone(telefone2))