const { default: axios } = require("axios");
const movies = require("../models/movies.json");

// criar funções que controlam as informações, recebendo as requisições e enviando as respostas

const home = (req, res) => {
   res.status(200).send({
       "message":"Seja bem vinda ao Teraflix, uma API maneira de filmes!"
   })

};

// visualizar todos os filmes
const getAll = (req,res)=>{
    
    res.status(200).send(movies);
}
// consumir lista de filmes de api terceira utilizando axios

const getAllGhibliMovies= async (req,res)=>{
    try{const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    
    
    const data = response.data;

    res.status(200).send(data)

    } catch(e){
        console.error(e);

    }
    
}
//cadastrar novo filme

// deletar un filme do sistema

//atualizar titulo do filme

module.exports = {
    home,
    getAll,
    getAllGhibliMovies
};