let pizzas = require("../database/Pizzas.json");

const fs = require('fs');

const path = require('path');

module.exports = {
    listar: (req, res) => {
        // let pizzas = require("../database/Pizzas.json");
        res.render('pizzas.ejs', {
            pizzas,
            busca: ""
        });
    },
    delete: (req, res) => {
        let id = req.params.id;
        for (let i = 0; i < pizzas.length; i++){
            if(pizzas[i].id == id){
                pizzas.splice(i,1);
                fs.writeFileSync(path.join(__dirname, '../database/Pizzas.json'), JSON.stringify(pizzas, null, 4));
            }
        }
    
        res.redirect('/');

    },
    mostrar: (req, res) => {
        //capturar id 
        let id = req.params.id;
        let idProxima;
        let idAnterior;
        let posicao = pizzas.findIndex(p => p.id == id);
        let pizza = pizzas[posicao];

        if (posicao == pizzas.length - 1) {
            idProxima = pizzas[0].id
        } else {
            idProxima = pizzas[posicao + 1].id
        };

        if (posicao == 0) {
            idAnterior = pizzas[pizzas.length - 1].id;
        } else {
            idAnterior = pizzas[posicao - 1].id
        };

        res.render('pizza.ejs', {
            pizza,
            idAnterior,
            idProxima
        });
    },
    buscar: (req, res) => {
        let trechoBuscado = req.query.q;
        let resultado = pizzas.filter(pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase()));

        if (trechoBuscado == "") {
            res.redirect('/')
        } else {


            //lembrar de pedir ajuda para prof explicar direitinho pq não entendi muito bem
            // let resultado = pizzas.filter(pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase()));
            res.render('pizzas.ejs', {
                pizzas: resultado,
                busca: trechoBuscado
            });


        }

    },

    teste: (req, res) => {
        res.send('Pagina de testes');
    },

    criarPizza: (req, res) => {
        res.render('criarPizza.ejs');
    },

    guardarPizza: (req, res) => {
        let pizza = {
            "id": pizzas[pizzas.length - 1].id + 1,
            "nome": req.body.nomePizza,
            "ingredientes": req.body.ingredientes.split(","),
            "preco": req.body.preco,
            "img": '/img/' + req.body.img,
            "destaque": false
        };
        pizzas.push(pizza);

        fs.writeFileSync(path.join(__dirname, '../database/Pizzas.json'), JSON.stringify(pizzas, null, 4));
        res.redirect('/');


    }
};