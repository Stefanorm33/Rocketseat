let listElement = document.querySelector('ul');
let inputElement = document.querySelector('input')

function renderRepositories(repositories){

    for(repo of repositories){

        let repoList = document.createTextNode(repo.name);
        let liElement = document.createElement('li');

        liElement.appendChild(repoList);
        listElement.appendChild(liElement);
    }

}

    function listRepositories(){

        let user = inputElement.value;

        if(!user) return;

        axios.get('https://api.github.com/users/'+ user +'/repos')
            .then(function(response){

                renderRepositories(response.data);
            })
    }