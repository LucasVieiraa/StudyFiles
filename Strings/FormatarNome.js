

    function formatarNome(nomeCompleto){
        nomeCompleto = nomeCompleto.trim()
        let espaco = nomeCompleto.indexOf(' ')
        if(espaco < 0) nomeCompleto

        let primeiroNome = nomeCompleto.substring(0, espaco)
        let segundoNome = nomeCompleto.substring(espaco + 1)
        return `${segundoNome} ${primeiroNome}`
    };

console.log(formatarNome('Lucas Gomes Vieira'))


/*
console.log(formatarNome('Lucas'))//Lucas 
console.log(formatarNome('Lucas Gomes'))//Gomes Lucas 
console.log(formatarNome('Lucas Gomes Vieira'))//Gomes Vieira Lucas 
*/