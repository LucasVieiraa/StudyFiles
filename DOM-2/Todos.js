//                                                    RESUMO DOM-2

//Sempre que comecar com 'query' vai retornar uma NodeList(ESTATICO- Caso o DOM mude a NodeList nao atualiza)
//Sempre que comecar com 'get' vai retornar um HTMLCollection(ALTERAVEL- Caso o DOM mude o HTMLCollection ira atualizar)

//query... = NodeList
//get... = HTMLCollection

//after(): Coloca algo depois de ...
//before(): Coloca algo antes de ...

//APPENDCHILD(): & APPEND: Sempre ira colocar no final, depois do ultimo filho do elemento.(Insere elementos atraves do DOM).
//PREPEND(): O prepend coloca antes do primeiro filho.(Insere elementos atraves do DOM).
//INSERTBEFORE(): Recebe dois parametros, o novo filho e o filho referencia.(Insere elementos atraves do DOM).
//CLONENODE(): Clona o elemento, deve usar true ou false como parametro.

//beforebegin(), afterbegin(), beforeend(), afterend(). Aceita tags HTML (Insere textos atraves do DOM).
//insertAdjacentText(). Nao aceita tags HTML (Insere textos atraves do DOM).


//parentElement e parentNode: Ambos navegam no DOM.
//nextSibling: Retorna o nó seguinte ao especificado dentro do lista de filhos do seu pai.
//nextElementSibling: Retorna o ELEMENTO seguinte ao especificado dentro do lista de filhos do seu pai.

//children: Retorna os NOS do tipo elemento
//childNodes: Retorna todos os NOS
//firstChild: Retorna o primeiro filho

//firstElementChild: Retorna o primeiro elemento filho
//lastChild: Retorna o ultimo filho 
//lastElementChild: Retorna o ultimo elemento filho 

//hasChildNodes(): Verifica se contem filhos, retorna true se tiver e false caso nao exista
//removeChild(): Remove o filho
//remove(): Remove
