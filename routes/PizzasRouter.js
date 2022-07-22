
//importando o express
const express = require('express');

//criando um roteador 
const router = express.Router();

//importando PizzasCrontroller
const PizzasCrontroller = require("../controllers/PizzasController");

//criando uma rotas get 
router.get('/',PizzasCrontroller.listar);
router.get('/pizzas/:id',PizzasCrontroller.mostrar)


//exportando 
module.exports = router;