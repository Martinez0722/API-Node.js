const express = require("express");
const router = express.Router();

const controller = require("../controllers/moviesControllers");

// mensagem genérica
// {GET}/movies/
router.get("/", controller.home);

// {GET}/movies/all
router.get("/all", controller.getAll);

//GET/movies/ghibli
router.get("/ghibli", controller.getAllGhibliMovies);


module.exports = router;
