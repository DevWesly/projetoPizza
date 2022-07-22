
//importando o express
const express = require('express');

//criando a funcao app do express.
const app = express();

//importando a biblioteca path
const path = require('path');

// Configuração do Template Engine
app.set('view engine','ejs');

//config a pasta public
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));


//importando PizzasRouter.
const PizzasRouter = require("./routes/PizzasRouter");

//criando a rota '/' no servidor
// app.get('/',(req,res)=>{
//     res.send("ola Vizitante")
// });


//Utilizando o PizzasRouter como roteador da aplicação
app.use('/',PizzasRouter);

//criando um endereços para rodar a aplicação
app.listen(3001,()=>{
    console.log("App rodando na porta 3001")
});