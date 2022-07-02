const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

// importar as rotas

const moviesRoutes = require("./routes/moviesRoutes")

//definir rota raiz do projeto
app.use("/movies", moviesRoutes)
module.exports = app;
