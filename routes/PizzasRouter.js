
//importando o express
const express = require('express');

//criando um roteador 
const router = express.Router();

//importando PizzasCrontroller
const PizzasCrontroller = require("../controllers/PizzasController");

//criando uma rotas get 
router.get('/',PizzasCrontroller.listar);

router.get('/pizzas/busca', PizzasCrontroller.buscar);

router.get('/pizzas/:id',PizzasCrontroller.mostrar);

router.get('/teste', PizzasCrontroller.teste);

router.get('/pizzas/buscavazia', PizzasCrontroller.buscaVazia);



//exportando 
module.exports = router;