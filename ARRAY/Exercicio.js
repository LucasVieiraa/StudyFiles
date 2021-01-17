//____________________________________________________________________________________//
//              Regras                                                                //  
//  Criar duas funcoes: sum() e avarage()                                             //
//  sum():      Retornar um numero, a soma dos argumentos passados                    //
//  avarage():  Retornar a media, a soma dividido pelo length dos argumentos passados // 
//____________________________________________________________________________________//
//              Requesitos                                                            //      
//  As funcoes podem receber um ou mais parametros                                    //
//  Usar os novos metodos                                                             //
//____________________________________________________________________________________//

//___________________________________________________________
  function sum(){
  // const numbers = Array.from(arguments);s
    const numbers = [...arguments];
      return numbers.reduce(function(sum, atual){
        return sum + atual;
      }, 0)
  }
//___________________________________________________________

  function avarage(){
    return sum(...arguments) / arguments.length;
  }
//___________________________________________________________

  let soma = sum(1, 5, 2, 5, 2)
  console.log(soma)

  let media = avarage(1, 5, 2, 5, 2);
  console.log(media)
//___________________________________________________________
