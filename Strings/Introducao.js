/*
replace(),          replaceAll() **
indexOf(),          lastIndexOf(),          includes()*,
slice(),            substring(),            split(),
toLowerCase(),      toUpperCase(),
valueOf(),
trim()*,            trimEnd()*,             trimStart()*,
padStart()*,        padEnd()*,
startsWith()*,      endsWith()*,
charAt(),           charCodeAt()            e length 
*/

let str1 = 'Minha String Bacanuda'
console.log(str1.replace('i', 'o'))
console.log(str1)

//  console.log(str1.indexOf('string'))
//  console.log(str1.includes('minha'))
//  console.log(str1.indexOf('minha') >= 0)

    console.log(str1.slice(2, 5))
    console.log(str1.substring(2, 5))

        console.log(str1.toUpperCase())
        console.log(str1.toLowerCase())

            let strObj = new String('minha string como objeto')
            console.log(strObj)
            console.log(strObj.valueOf())
            console.log(strObj.toString())
            console.log('------------------------------------')

                str1 = '           ' + str1 + '                 '
                console.log(str1)
                console.log(str1.trim())
                console.log(str1.trimEnd())
                console.log(str1.trimStart())
                console.log(str1)

                    str1 = '0123456789'
                    console.log(str1.padStart(20, '-'))
                    console.log(str1.padEnd(20, '-'))
                    console.log(str1)
          
                        let str2 = 'Hoje e terca'
                        console.log(str2.startsWith('Hoje'))
                        console.log(str2.endsWith('Hoje'))

                            let str3 = 'abcdefgh'
                            console.log(str3.charAt(3))
                            console.log(str3.charCodeAt(3))






/*                              ANOTAR NO CADERNO

replace() => substitui uma coisa por outra ex: str1.replace('i', 'o')//substituiu a primeira letra 'i' pela letra 'o', nao altera o original          
replaceAll() => substitui uma coisa por outra ex: str1.replaceAll('i', 'o')//substituiu TODAS as letras 'i' pela letra 'o'//SEM MUITOS SUPORTES, NAO USADO.
indexOf() => retorna o indice da PRIMEIRA ocorrencia de algo pesquisado ex: str1.indexOf('string')//caso o valor nao exista o retorn e '-1'                     
lastIndexOf() => retorna o indice da ULTIMA ocorrencia de algo pesquisado ex: str1.lastIndexOf('string') //caso o valor nao exista o retorn e '-1'
includes() => retorna true caso valor buscado exista, e false se nao existir ex: str1.includes('minha') //Nao muito usado, pois o polyfill e muito simples => str1.indexOf('minha') >= 0 
slice() => corta a string, recebe dois parametros, slice(posicao do indice para iniciar, posicao do indice final para parar de cortar'OPCIONAL'), ex: slice(2, 5), slice(-2). ACEITA PARAMETROS NEGATIVOS                       
substring() => corta a string, recebe dois parametros, substring(posicao do indice para iniciar, posicao do indice final para parar de cortar'OPCIONAL'), ex: substring(2, 5). NAO ACEITA PARAMETROS NEGATIVOS
toLowerCase() => transforma as letras da string em minusculas, nao altera o original     
toUpperCase() => transforma as letras da string em maiusculas, nao altera o original 
valueOf() => retorna o valor da string, (o conteudo).
trim() => remove os espacos e quebras de linha de uma string                     
trimStart() => remove apenas os espacos e quebras de linha do inicio de uma string
trimEnd() => remove apenas os espacos e quebras de linha do final de uma string
padStart() => preenche o inicio de uma string com uma quantidade de espacos passado por parametro, ex: padStart(20)     
padEnd() => preenche o final de uma string com uma quantidade de espacos, ou o que desejar passando por parametro, ex: padEnd(20, '-')
startsWith() => retorna um boolean, true se comecar com o valor buscado e false se nao comecar    
endsWith() => retorna um boolean, true se terminar com o valor buscado e false se nao terminar
charAt() => retorna o valor buscado pelo indice, passando por parametro, ex: chartAt(2)                      
charCodeAt() => retorna o UNICODE buscado pelo indice, passando por parametro, ex: chartCodeAt(2)
length => mostra quantos caracteres uma string contem 
split() => transforma string em array, podendo usar um parametro para a separacao ex: exemplo.split(',')
*/