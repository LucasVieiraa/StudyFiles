(function(){
                    'use strict'

 const txtTitulo = document.getElementById('txtTitulo');
 const botao_Adicionar = document.getElementById('btn');
 const formCadastro = document.querySelector('.formCadastro');
 const txtDescricao = document.getElementById('txtDescricao');    
 const contadorContainer = document.getElementById('contador');
 const span = contadorContainer.getElementsByTagName('span')[0];
 const caracteresMaximo = txtDescricao.maxLength;
 const checkbox = document.getElementById('chkAceito');
 const feedbackMessage = document.getElementById('feedbackMessage');
 const fecharMensagemError = feedbackMessage.getElementsByTagName('button')[0];
 mostrarCaracteres(caracteresMaximo);

    formCadastro.addEventListener('submit', function(evt){
       console.log(txtTitulo.value)
       if(!txtTitulo.value){
           mostrarMensagemError('Preencha todos os campos', function(){
                txtTitulo.focus()
            })
           evt.preventDefault()
       }
       
    })

    function mostrarMensagemError(msg, cb){ 
       feedbackMessage.classList.add('show')
       feedbackMessage.getElementsByTagName('p')[0].textContent = msg;     
       
            fecharMensagemError.focus()

            function esconderMensagemError(){
                console.log('Mensagem fechada')
                feedbackMessage.classList.remove('show')

                fecharMensagemError.removeEventListener('click', esconderMensagemError)
                fecharMensagemError.removeEventListener('keyup', fecharMsgErroTeclado);
        
                if(typeof cb === 'function'){
                    cb()      
                }
                
            }
       
            function fecharMsgErroTeclado(evt){
                console.log(evt.keyCode)
                if(evt.keyCode === 27){
                    esconderMensagemError()
                }

            }

            fecharMensagemError.addEventListener('click', esconderMensagemError);
            fecharMensagemError.addEventListener('keyup', fecharMsgErroTeclado);

    }


       contadorContainer.style.display = 'block';

       
       function checarCaracteres(){
           let nDigitos = this.value.length
           let digitosRestantes = parseInt(caracteresMaximo) - parseInt(nDigitos);
           mostrarCaracteres(digitosRestantes);
         };

           function mostrarCaracteres(n){
             span.textContent = n
           };

           botao_Adicionar.disabled = true;
           checkbox.addEventListener('change', function(){
               botao_Adicionar.disabled = !this.checked
           });

       txtDescricao.addEventListener('input', checarCaracteres);





})()