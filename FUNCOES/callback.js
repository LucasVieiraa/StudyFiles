"use strict"
const teste = function(cb){
 console.log('Funcao teste');
 console.log(cb);
 typeof cb === 'function' && cb('Funcao passada pelo parametro');
 }

const fn = function(parametrooo){
    console.log('funcao anonima de callback');
    console.log(parametrooo);
}

teste(fn);