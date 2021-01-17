//Curto-circuito
let n = 0;
//O numero "0" e considerado falso

//==========================================================================================
//Maneira usando if(){}
    if(n === 0){
        n = 10
    }
    console.log(n)



//==========================================================================================
//Maneira usando ternario
    n === 0 ? n = 10 : n
    console.log(n)



//==========================================================================================
//Maneira usando curto-circuito
    n = n || 10
    console.log(n)


    
//Como o n esta por padrao "0" (falso), a segunda expressao se torna verdadeira
//==========================================================================================
////////////////////////////////////////////////////////////////////////////////////////////
//==========================================================================================
//Outro exemplo

    let isValid = true
    let _isValid = false

    isValid || _isValid ? console.log('tudo valido') : console.log('asd')

//==========================================================================================
//Maneira usando if(){}
    if(isValid){
        console.log('valido')
    }

//==========================================================================================
//Maneira usando ternario
    isValid ? console.log('valido') : console.log('invalido')



//==========================================================================================
//Maneira usando curto-circuito (&&)
    isValid && console.log('valido')
//Se isValid for FALSE o resto NAO sera executado, pois sera FALSO
 

//==========================================================================================
//Maneira usando curto-circuito (||)
    isValid || console.log('valido')
//Se isValid for FALSE, sera verificado se a proxima for true, nesse caso sera executado o
//console.log('valido') mesmo isValid sendo falso


//==========================================================================================
//  && : (e), em uma expressao de curto-circuito, tudo precisa ser true para o codigo ser executado.
//  || : (ou), em uma expressao de curto-circuito, so sera executado o que for true.