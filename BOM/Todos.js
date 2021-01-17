/*                                                        BOM
    INTRODUCAO
    innerHeight - Tamanho da area util do browser ALTURA
    innerWidth - Tamanho da area util do browser LARGURA
    outerHeight - Tamanho do browser ALTURA
    outerWidth - Tamanho do browser LARGURA
    screenX - Localizacao da tela, quando cheia = 0
    screenY - Localizacao da tela, quando cheia = 0

    HISTORY
    history.back() - Retorna para pagina anterior caso exista
    history.forward() - Avanca para pagina seguinte caso exista
    history.go(-1) - Retorna para pagina anterior caso exista
    history.go(1) - Avanca para pagina seguinte caso exista

    METODOS PARA NAVEGAR E ACESSAR A URL
    location.assign('http://google.com') - navega para um link passado como parametro(altera o lenth do historico)
    location.replace('http://google.com') - navega para um link passado como parametro(NAO altera o lenth do historico)
    location.reload() - recarrega a pagina

    METODOS NAVIGATOR
    navigator.userAgent - Mostra informacoes sobre o usuario que esta acessando a pagina
    navigator.plugins - Mostra informacoes sobre os plugins disponiveis
    navigator.cookieEnabled - Retorna um boolean mostrando se os cookies estao habilitados
    navigator.platform - Retorna o sistema operacional

    INFORMACOES DA TELA DO USUARIO
    screen.width - Tamanho da tela do usuario LARGURA
    screen.availWidth - Tamanho da tela disponivel do usuario LARGURA
    screen.height - Tamanho da tela do usuario ALTURA
    screen.availHeight - Tamanho da tela disponivel do usuario ALTURA
    screenX - Localizacao da tela, quando cheia = 0
    screenY - Localizacao da tela, quando cheia = 0

    METODOS PRINCIPAIS
    alert('Alerta alguma coisa') - Mostra um alerta na tela do usuario
    prompt('Digite alguma coisa') - Mostra uma pergunta com caixa de texto na tela do usuario
    confirm('clique OK para continuar ou CANCEL para cancelar') - quando clicado em OK retorna true, CALCEL retorna false
    open('http://google.com', 'nome-janela', 'width=600,height=300') - Abre uma pagina
    close() - Fecha uma pagina, funciona somente se a mesma foi aberta com o metodo open()
    print() - Tira printa da tela

    METODOS ROLAGEM
    scrollTo(x,y) - Recebe dois paremetros, o primeiro e o scroll horizontal e o segundo vertical, 
    o scroll vai ate o valor passado, nao soma com o anterior. Ex: scrollTo(0,50)
    scrollBy(x,y) - Recebe dois paremetros, o primeiro e o scroll horizontal e o segundo vertical,
    o scroll ira somar com o valor anterior. Ex:
    pageXOffset - Retorna a quantidade de vezes que o scroll foi usado - HORIZONTAL
    pageYOffset - Retorna a quantidade de vezes que o scroll foi usado - VERTICAL

    EVENTOS
    load - dispara quando tudo do site for carregado na tela(depende da velocidade da internet)
    DOMContentLoaded - dispara quando toda a estrutura do DOM estiver disponivel para ser manipulada(dispara primeiro)
    resize - dispara quando o usuario altera o tamanho da tela e retorna seu valor
    scroll - dispara quando o usuario utiliza o scroll na tela e retorna seu valor
    unload - dispara quando a pagina fecha
    beforeunload - dispara antes da pagina fechar
     ex: window.addEventListener('load', () => {
        console.log('load')
        })

  */
