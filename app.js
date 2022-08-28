
//importando o express
const express = require('express');

//criando a funcao app do express.
const app = express();

var methodOverride = require('method-override');

// configurando servidor para receber e trabalhar com metodo post 
// e trabalhar com as informações via json
app.use(express.json());    

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'))


//importando a biblioteca path
const path = require('path');

// Configuração do Template Engine
app.set('view engine','ejs');

//config a pasta public
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));


//importando PizzasRouter.
const PizzasRouter = require("./routes/PizzasRouter");

//importando rota teste
const RotaTeste = require("./routes/rotaTeste")

//criando a rota '/' no servidor
// app.get('/',(req,res)=>{
//     res.send("ola Vizitante")
// });


//Utilizando o PizzasRouter como roteador da aplicação
app.use(PizzasRouter);

//utilizando o RotaTeste como roteador da aplicação
app.use(RotaTeste);

//criando um endereços para rodar a aplicação
app.listen(3001,()=>{
    console.log("App rodando na porta 3001")
});