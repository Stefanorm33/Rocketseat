let ulElement = document.querySelector('ul');
let inputElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

let nomes = ["Diego", "Gabriel", "Lucas"];

function renderNomes(){

        ulElement.innerHTML = "";

    for (nome of nomes){


        let liElement = document.createElement('li');
        let liText = document.createTextNode(nome);

        liElement.appendChild(liText)

        ulElement.appendChild(liElement);

    }

}
    renderNomes();

    function addNome(){

        let listNome = inputElement.value;
        nomes.push(listNome);
        inputElement.value = '';
        renderNomes();



    }

    buttonElement.onclick = addNome;