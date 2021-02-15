//                                                DESTRUCTURING
//const {prop, prop} = obj
//Extrai propriedades de um objeto e armazena as mesmas em variaveis com o mesmo nome
//Ex: 

    const eu = {
      nome: 'Lucas',
      sobrenome: 'Gomes Vieira'
    };

    const eu2 = {
      nome2: 'Lucas2',
      sobrenome2: 'Gomes2 Vieira2'
    }

    const {nome, sobrenome} = eu //                        <----- Armazena os valores com o mesmo nome de propriedade
    const {nome2: exemplo, sobrenome2: exemplo2} = eu2 //  <----- Armazena os valores com outro nome de propriedade

    console.log(nome)
    console.log(sobrenome)
    console.log('--------------------------')
    console.log(exemplo)
    console.log(exemplo2)
