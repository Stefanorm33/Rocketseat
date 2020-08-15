let buttonElement = document.querySelector('button');
let divElement = document.querySelector('div');


    function getRandomColor(){

        let letters = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i< 6; i++){

            color += letters[Math.floor(Math.random()* 16)];

        }

        return color;



    }
  


buttonElement.onclick = function(){

let square = document.createElement('div');

    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundColor = "#F00";

    square.onmouseover = function(){

        square.style.backgroundColor = getRandomColor();
    }

   
   

    divElement.appendChild(square);

};