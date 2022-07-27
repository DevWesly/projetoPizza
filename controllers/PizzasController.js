const pizzas = require("../database/Pizzas.json");

module.exports = {
    listar: (req, res) => {
        // let pizzas = require("../database/Pizzas.json");
        res.render('pizzas.ejs', {
            pizzas,
            busca: ""
        });
    },
    mostrar: (req, res) => {
        //capturar id 
        let id = req.params.id;
        let idProxima ;
        let idAnterior ;
        let posicao = pizzas.findIndex(p => p.id == id);
        let pizza = pizzas[posicao];

        if(posicao == pizzas.length -1){
            idProxima = pizzas[0].id
        }else{idProxima = pizzas[posicao + 1].id};

        if(posicao == 0 ){
            idAnterior = pizzas[pizzas.length-1].id;
        }else{idAnterior = pizzas[posicao - 1].id};

        console.log(posicao);

        res.render('pizza.ejs',{pizza,idAnterior,idProxima});
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
                pizzas: resultado, busca: trechoBuscado
            });


        }

    },

    buscaVazia: (req, res) => {
        res.send('ja farei');
    },

    teste: (req, res) => {
        res.send('Pagina de testes');
    }
};