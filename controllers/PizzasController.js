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

    }
};