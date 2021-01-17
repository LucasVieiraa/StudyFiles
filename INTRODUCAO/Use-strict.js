// "use strict"
//O 'use strict' normaliza os dados, ajuda na programacao, para funcionar devera ser a primeira linha do script.
// let x = 5;
// console.log(x);
//------------------------------------------

y = 10;

   function foo(){
   'use strict';
     let x = 20; 
                 }

foo();
console.log(y);

//------------------------------------------

//  function dobrar(n1, n1){
//     console.log(n1, n1);
//     return n1 * n1;
//                        }
// console.log(dobrar(5, 6));

//------------------------------------------

function Teste(){
    'use strict';
    console.log(this);
    this.a = 'a';
                }
Teste()

//------------------------------------------