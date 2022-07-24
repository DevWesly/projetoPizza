const pizzas = require("../database/Pizzas.json");

module.exports = {
    listar: (req, res) => {
        // let pizzas = require("../database/Pizzas.json");
        res.render('pizzas.ejs',{pizzas});
    },
    mostrar:(req,res)=>{
        //capturar id 
        let idDaPizza = req.params.id;

        //buscar se no array de pizzas tem um id igual
        let pizza = pizzas.find((p)=>{
            return p.id == idDaPizza;
        });
        //renderiza a view pizza.ejs com a variavel pizza
        res.render('pizza.ejs',{pizza});

    },
    buscar:(req,res)=>{
        let trechoBuscado = req.query.q;

        if(trechoBuscado == ""){res.redirect('/')}
        else{
            // let novoArray = pizzas.filter(function(pizza) {
            //     return pizza.nome == trechoBuscado;
            //   });

            //lembrar de pedir ajuda para prof explicar direitinho pq não entendi muito bem
            let resultado = pizzas.filter(pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase()));
            res.render('pizzas.ejs',{pizzas:resultado,trechoBuscado});

        
        }

    },
    teste:(req,res)=>{
        res.send('Pagina de testes');
    }
};