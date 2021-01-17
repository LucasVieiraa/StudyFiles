/*Propriedade style
Recupera ou adiciona um valor em uma propriedade 

Ex:
    let div = document.querySelector('div')
    div.style.backgroundColor = 'blue'
    div.style.backgroundColor = '#ddd'

    !important - prioridade, ex: div {   background-color: darkcyan !important;   }

    obs: o DOM tem prioridade
--------------------------------------------------------------------------------------------------------------------

    classList

    let div = document.querySelector('div')
    div.classList.add('exemplo') - adiciona uma classe com o nome especificado no parametro
    div.classList.remove('exemplo) - remove uma classe com o nome especificado no parametro
    div.className - retorna o nome da classe
    div.className = 'exemplo' - seta o nome da classe, todas as classes adicionadas serao removidas
    getComputedStyle(div).backgroundColor - retorna o valor computado do background-color

    DOCUMENTO
    div.offsetWidth - Tamanho do elemento, Largura
    div.offsetHeight - Tamanho do elemento, Altura
    div.offsetLeft - Posicao do elemento no documento
    div.offsetTop - Posicao do elemento no documento 

    VIEWPORT
    div.getBoundingClientRect() - retorna todas as prorpiedades em relacao a viewport
    div.getBoundingClientRect().botton
    div.getBoundingClientRect().left
    div.getBoundingClientRect().right
    div.getBoundingClientRect().top
    div.getBoundingClientRect().width
    div.getBoundingClientRect().height
    getBoundingClientRect() - retorna o tamanho de um elemento e sua posição relativa ao viewport.
    Ex: h2.getBoundingClientRect().top

    LINKS 
    Quando usamos a tag <a> criamos um link, que pode ser direcionado para outra pagia ou alguma secao na mesma

    Ex: <li><a href="#s1">link 1</a></li> - a tag 'a' esta selecionando o id='s1' de um texto, assim clicando no link 1
    sera direcionado para o texto 1.

    Ex: <a href="https://www.w3schools.com">Visit W3Schools.com!</a> - redireciona para um link externo

    Ex: <a href="https://www.w3schools.com">
        <img border="0" alt="W3Schools" src="imagem-exemplo" width="100" height="100">
        </a> 
    link dentro da imagem, ao clicar na imagem ira redirecionar para o site especificado

   

    SELETOR DE ATRIBUTO CSS

    O seletor de atributos combina elementos baseado no valor de um atributo dado.
    Ex: <header class="hero" data-paralax data-p-velocity=".5">
        const dataParalaxContainer = document.querySelectorAll('[data-paralax]')//seleciona o atributo data-paralax

    
    getComputedStyle(c)
*/
