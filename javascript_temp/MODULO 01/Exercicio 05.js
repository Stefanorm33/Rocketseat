let usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS","Redux"]
    },
    {
        nome:"Gabriel",
        habilidades:["VueJS", "ruby on Rails", "Elixir"]

    }


]

    function mostraHabilidades(usuarios){

        for(usuario of usuarios){


            console.log("O "+ usuario.nome+ " Possui as seguintes habilidades:"+
            usuario.habilidades.join(",")
            )
        }


    }

    mostraHabilidades(usuarios)