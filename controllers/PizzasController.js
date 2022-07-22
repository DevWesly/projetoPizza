module.exports = {
    listar: (req, res) => {
        let pizzas = require("../database/Pizzas.json");
        res.render('pizzas.ejs',{pizzas});
    }
};