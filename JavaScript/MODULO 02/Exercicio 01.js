let buttonElement = document.querySelector('button');
let divElement = document.querySelector('div');


buttonElement.onclick = function (){

    let square = document.createElement('div');
    
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundColor= "#F00";

    divElement.appendChild(square);
}