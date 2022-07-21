
//importando o express
const express = require('express');

//criando um roteador 
const router = express.Router();

//importando PizzasCrontroller
const PizzasCrontroller = require("../controllers/PizzasController");

//criando uma rota get 
router.get('/',PizzasCrontroller.listar);


//exportando 
module.exports = router;