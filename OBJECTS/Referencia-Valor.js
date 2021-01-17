//============================================
//Passando por valor
    let x = 10

    function mudaX(n){
        n++
        console.log('x interno:', n)
    };

    mudaX(x)
    console.log('x externo:', x)

//Quando passado por valor e alterado o 'x' externo,
//ou seja e exatamente a mesma coisa que fazer isso:
// mudaX(10).  
    
//============================================
//Passando por referencia
    let y = [10]

    function mudaY(a){
        a.push(11)
        console.log('y interno:', a)
    };
    mudaY(y)
    console.log('y externo:', y)

//Quando passado por referencia o valor original nao 
//e alterado, ou seja somente uma referencia do valor 
//original.

//Outro exemplo

    let obj = { n: 50 };

    function mudaObj(referencia){
        referencia.n++
    };

    mudaObj(obj)
    console.log(obj)
    
//============================================