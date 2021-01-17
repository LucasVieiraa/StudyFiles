//________________________________________________________________________________________________________
//                                  Event Handler - DOM Level 2



                            const btn = document.getElementById('btn')
                            btn.addEventListener(evento, funcao, fase)


//______________________________________________________________________________________________________//
//           OOOOOO     OOOOOO                                                                          //
//           O    O     O    O                    //          \\                                        //
//           OOOOOO     OOOOOO                      //      \\                                          //
//                  /                                 //  \\                                            //
//                 /                                    /\                                              //
//                 - --                               \\  //                                            //
//                                                  \\      //                                          //
//              -________-                        \\          //                                        //
//______________________________________________________________________________________________________//


//  Evento: Obrigatorio, 
//-------------------------------------------------------------------------------
//  Funcao: Obrigatorio, 
//-------------------------------------------------------------------------------
//  Fase: fase de 'borbulhamento', por padrao o document vem primeiro,
//  pode utilizar o true: primeiro o document e false: primeiro o click,
//  caso nao especifique a Fase por padrao e false.
//-------------------------------------------------------------------------------
//                                      Codigo invalido
//________________________________________________________________________________________________________


//exemplo.stopPropagation(): interrompe a propagacao, a continuacao de eventos.

//exemplo.preventDefault(): inibi o comportamento padrao.

//exemplo.target: o '.target' representa o elemento que disparou o evento.

//exemplo.currentTarget: se refere ao elemento associado ao event handler. 

//Obs: o This em function expression = dinamico, em arrow function = estatico.

//exemplo.nodeName: A propriedade nodeName retorna o nome do nó especificado.

//Evento 'submit': Enviar.
//Evento 'change': evento que usei no checkbox.


//exemplo.setAttribute(): Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento //específico, element.setAttribute(name, value);
//name  =  é o nome do atributo como string.
//value =  é o novo valor desejado do atributo.
//Exemplo: feedbackMessage.setAttribute('class', 'show');

//.classList.add: Adiciona uma classe 
//.classList.remove: Remove uma classe


//      Eventos de teclado
//exemplo.keyCode: retorna o codigo da tecla pressionada do teclado ex: esq = 27
//exemplo.key: retorna o nome da tecla pressionada do teclado ex: esq = escape         
//keypress: so dispara em caracteres alfanuméricos












