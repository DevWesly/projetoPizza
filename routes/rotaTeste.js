const express = require('express');
const router = express.Router();

let Teste = require("../controllers/Teste");


router.get('/teste',Teste.formulario);
router.get('/teste2',Teste.teste2);





module.exports = router;
