let ulElement = document.querySelector('ul');

var nomes = ["Diego", "Gabriel", "Lucas"];



function criaLista(){
    for(nome of nomes){


    let liList = document.createElement('li')
    let liText = document.createTextNode(nome);

    liList.appendChild(liText);
    ulElement.appendChild(liList)



    }
}
    criaLista();