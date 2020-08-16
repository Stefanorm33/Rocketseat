let ulElement = document.querySelector('ul');
let inputElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

let tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];



    function renderTarefas(){

        ulElement.innerHTML= "";

        for(tarefa of tarefas){

            let liList = document.createElement('li');
            let liText = document.createTextNode(tarefa);

            let linkElement = document.createElement('a');
            linkElement.setAttribute('href','#');

            let pos = tarefas.indexOf(tarefa);
            linkElement.setAttribute('onclick', 'deleteTarefa('+ pos +')');


            let linkText = document.createTextNode('EXCLUIR');

            linkElement.appendChild(linkText);

            liList.appendChild(liText);
            liList.appendChild(linkElement);
            ulElement.appendChild(liList);
        }

    };

        renderTarefas();

    function addTarefa(){

        let liText = inputElement.value;
        tarefas.push(liText);
        inputElement.value = '';
        renderTarefas();
        saveTarefas();
    }

        buttonElement.onclick = addTarefa;

       function  deleteTarefa(pos){
           tarefas.splice(pos, 1);
           renderTarefas();
           saveTarefas();


       }

       function saveTarefas(){

            localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
       }

       