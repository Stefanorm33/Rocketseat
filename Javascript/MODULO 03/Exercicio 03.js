let ulElement = document.querySelector('ul');
let inputElement = document.querySelector('input');

function renderRepositories(repositories){

    ulElement.innerHTML= '';


  for(repo of repositories){

   

    let repoText = document.createTextNode(repo.name);
    let liElement = document.createElement('li')

    liElement.appendChild(repoText);
    ulElement.appendChild(liElement);
  }

}

  function renderLoading(loading){
    ulElement.innerHTML='';

    let textElement = document.createTextNode('Carregando...');
    let loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    ulElement.appendChild(loadingElement);




  }

    function renderError(loading){
      ulElement.innerHTML='';

      let textElement = document.createTextNode('Erro!');
      let errorElement = document.createElement('li');

      errorElement.style.color ='#F00';

      errorElement.appendChild(textElement);
      ulElement.appendChild(errorElement); 



    }

    function listRepositories(){

    let user = inputElement.value;

    if(!user) return;

      renderLoading();

      axios.get('https://api.github.com/users/'+ user +'/repos')
      .then(function(response){

        renderRepositories(response.data);
      })

      .catch(function(){
        renderError();
      });
  } 

  