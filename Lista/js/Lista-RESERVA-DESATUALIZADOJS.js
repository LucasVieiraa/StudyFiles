;(function(){
                    'use strict'

 const todoAddBtnForm = document.getElementById('todo-add');
 const caixaTxt = document.getElementById('item-input');
 const ul = document.getElementById('todo-list');
 const liS = ul.getElementsByTagName('li');

    //(BASE) - Array armazenando as informacoes da Task - (BASE)
    let arrTasks = [
        {
            name: 'task 1',
            createAt: Date.now(),
            completed: false
        },
        {
            name: 'task 2',
            createAt: Date.now(),
            completed: false
        }
    ];



    //Adicionar Evento na Li (Mostrar no console.log() as Lis quando clicar)
    // function addEvtLi(li){
    //         li.addEventListener('click', function(){
    //             console.log(this)
    //         })   
    // };

    //Cria as Lis
    function generateLiTask(obj){
        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkBtn = document.createElement('button')
        const editBtn = document.createElement('i')
        const deleteBtn = document.createElement('i')
        const containerEdit = document.createElement('div')
        const containereditBtn = document.createElement('button')
        const inputEdit = document.createElement('input')
        const containerCancelBtn = document.createElement('button')

        li.className = 'todo-item'
        p.className = 'task-name'
        p.textContent = obj.name
        editBtn.className = 'fas fa-edit'
        containerEdit.className = 'editContainer'
        inputEdit.className = 'editInput'
        containereditBtn.className = 'editButton'
        containereditBtn.textContent = 'Edit'
        containerCancelBtn.className = 'cancelButton'    
        containerCancelBtn.textContent = 'Cancel'
        deleteBtn.className = 'fas fa-trash-alt'
        checkBtn.className = 'button-check'
        checkBtn.innerHTML = '<i class="fas fa-check displayNone"></i>'

          inputEdit.setAttribute('type', 'text')
          checkBtn.setAttribute('data-action', 'checkBtn')
          editBtn.setAttribute('data-action', 'editBtn')
          containereditBtn.setAttribute('data-action', 'containereditBtn')
          containerCancelBtn.setAttribute('data-action', 'containerCancelBtn')
          deleteBtn.setAttribute('data-action', 'deleteBtn')

            containerEdit.appendChild(inputEdit)
            containerEdit.appendChild(containereditBtn)
            containerEdit.appendChild(containerCancelBtn)      
            li.appendChild(checkBtn)
            li.appendChild(p)
            li.appendChild(editBtn) 
            li.appendChild(containerEdit)
            li.appendChild(deleteBtn)

        return li
    };

    //Insere as Lis na Tela
    function renderTask(){
        ul.innerHTML = ''
        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj))
        });
    };

    //Adiciona as informacoes na Array Base 'arrTasks' 
    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    };

    //Funcao dos Botoes
    function clickedUl(e){
        const dataAction = e.target.getAttribute('data-action')

        if(!dataAction) return

        let currentLi = e.target
        while(currentLi.nodeName !== 'LI'){
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...liS].indexOf(currentLi)
        // console.log(currentLiIndex)

        const actions = {
            checkBtn: function(){
                console.log('checkBtn no Obj')
            },
            editBtn: function(){
                const editContainer = currentLi.querySelector('.editContainer');
                
                [...ul.querySelectorAll('.editContainer')].forEach(container => {
                    container.removeAttribute('style')
                });

                editContainer.style.display = "flex";

            },
            deleteBtn: function(){
                console.log(`Task '${arrTasks[currentLiIndex].name}' removida`)
                arrTasks.splice(currentLiIndex, 1)
                renderTask()
                //currentLi.remove()
                //currentLi.parentElement.removeChild(currentLi)
            } 
        }

        if(actions[dataAction]){
           actions[dataAction]()
        }

    }


    //Botao 'Add', recebe os valores da 'addTask', etc...
    todoAddBtnForm.addEventListener('submit', e => {
        e.preventDefault()
        console.log(caixaTxt.value)
        addTask(caixaTxt.value)
        renderTask()
        caixaTxt.value = ''
        caixaTxt.focus()

    });

    ul.addEventListener('click', clickedUl)

        renderTask()
   
 
})();