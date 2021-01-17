//var: escopo de funcao (pode ser acessado dentro da funcao inteira)
//let e const: escopo de bloco (pode ser acessado dentro do bloco da funcao(dentro de um if somente))

let n = 'global';

function mostraN(){
    let n1 = 'n1 local';
     if(true){
      var n2 = 'n2 dentro do if com var'}

            console.log(n2)
            console.log(`valor de n1: ${n1}`)
            console.log(`valor de n2: ${n2}`)
}

console.log(`o valor de n: ${n}`)
mostraN();
//----------------------------------------------------
function fnExt(){
let n = 'n local na funcao externa "fnExt"';
console.log(n);
      
  function fnInt(){
  let n = 'n local na funcao interna "fnInt"';
  console.log(n);
}
fnInt();
}
fnExt();