
//importando o express
const express = require('express');

//criando um roteador 
const router = express.Router();

//importando PizzasCrontroller
const PizzasCrontroller = require("../controllers/PizzasController");

//criando rotas get 
router.get('/',PizzasCrontroller.listar);

router.get('/pizzas/busca', PizzasCrontroller.buscar);

router.get('/pizzas/:id',PizzasCrontroller.mostrar);

router.delete('/deletar/:id',PizzasCrontroller.delete);

router.get('/teste1', PizzasCrontroller.teste);

router.get('/criar', PizzasCrontroller.criarPizza);

router.post('/criar', PizzasCrontroller.guardarPizza);

router.get('/atualizar',PizzasCrontroller.atualizar);
router.get('/atualizar/:id', PizzasCrontroller.atualizar2Etapa);
router.put('/atualizar/:id',PizzasCrontroller.atualizar3Etapa);








//exportando 
module.exports = router;