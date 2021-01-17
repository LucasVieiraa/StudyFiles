//Form cadastro id = formCadastro
//Titulo id = txtTtulo
//Botao Adicionar id = btn 
//Txt descricao id = txtDescricao
//Caracteres id = contador
//Checkbox id = chkAceito
//Mensagem css feedback id = feedbackMessage
(function(){
                    'use strict'
//"'""''Globais''""'"                
const txtTitulo = document.getElementById('txtTitulo');
const adicionar = document.getElementById('btn');
const formCadastro = document.querySelector('.formCadastro');
const txtDescricao = document.getElementById('txtDescricao');    
const contadorContainer = document.getElementById('contador');
const span = contadorContainer.getElementsByTagName('span')[0];
const caracteresMaximo = txtDescricao.maxLength;

 formCadastro.addEventListener('submit', function(evt){
    if(!txtTitulo.value){
        console.log('txtTitulo esta vazio')
        evt.preventDefault()
        txtTitulo.focus()//foca na caixa de texto
    }else{console.log(txtTitulo.value)}
 })

  
 function mostrarMensagemError(msg){
    // feedbackMessage.setAttribute('class', 'show');
    // feedbackMessage.textContent = msg;
 }
//  adicionar.addEventListener('click', function(evt){
//     if(!txtTitulo.value){
//         console.log('txtTitulo esta vazio')
//         evt.preventDefault()
//         txtTitulo.focus()//foca na caixa de texto
//     }else{console.log(txtTitulo.value)}
//  })

//  contadorContainer.removeAttribute('style')
    contadorContainer.style.display = 'block';//Bloqueia o contador

    
    function checkLength(){//Contador de caracteres
        let nDigitos = this.value.length
        let digitosRestantes = parseInt(caracteresMaximo) - parseInt(nDigitos);
        span.textContent = digitosRestantes;
      };

    txtDescricao.addEventListener('input', checkLength);






})()