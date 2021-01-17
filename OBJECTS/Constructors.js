//Funcao Construtora
//Para criar uma funcao construtora, o nome da funcao precisa comecar com letra maiuscula
//Para evitar erros utilize o "use strict"


function Task(x){
'use strict'
if(this === undefined) return
    let _name = x
    let _code = 'AA123'
                                            
    this.createdAt = new Date()
    this.updatedAt = null


        this.changeName = function(newName){
            if(newName){
                _name = newName
                this.updatedAt = new Date()
            }
        }
        this.changeCode = function(newCode){
            if(newCode){
                _code = newCode
                this.updatedAt = new Date()
            }
        }
        this.getName = function(){
            return _name
        }
        this.getCode = function(){
            return _code
        }
        
};
/*                              PARA ANOTAR NO CADERNO
    Para criar uma funcao construtora, o nome da funcao precisa comecar com letra maiuscula
    Para evitar erros utilize o "use strict"
    A funcao construtora 'Task(x)' esta com o nome encapsulado,
    para acessar o nome e necessario usar a funcao 'getName' e
    para alterar basta usar o changeName
    Desta maneira (usando variaveis privadas), o encapsulamento protege o codigo
*/


    const task1 = new Task('minha tarefa')
    task1.changeName('Novo nome "TASK1"')    
    // task1.changeName('Teste novo nome TASK1')s
    // task1.changeCode('codigo invalido')

    const task2 = new Task('minha segunda tarefa "TASK2"')
    // task2.changeCode('AA1234')

    const task3 = new Task('task 3')
    console.log(task3)
    // console.log(task1)
    // console.log(task1.getName())
    // console.log(task1.getCode())
