let pizzas = [{
    "id": 2,
    "nome": "Pepperoni",
    "ingredientes": ["mussarela", "pepperoni", "cebola"],
    "preco": 48.5,
    "img": "/img/pepperoni.jpg",
    "destaque": false
}, {
    "id": 3,
    "nome": "Fracatupiry",
    "ingredientes": ["mussarela", "frango", "catupiry"],
    "preco": 38.65,
    "img": "/img/fracatu.jpg",
    "destaque": true
}, {
    "id": 4,
    "nome": "Marguerita",
    "ingredientes": ["mussarela", "tomate", "manjericão"],
    "preco": 33.5,
    "img": "/img/marguerita.jpg",
    "destaque": false
}, {
    "id": 5,
    "nome": "Quatro Queijos",
    "ingredientes": ["mussarela", "gorgonzola", "provolone", "parmesão"],
    "preco": 38.5,
    "img": "/img/quatroqueijos.jpg",
    "destaque": true
}, {
    "id": 6,
    "nome": "Portuguesa",
    "ingredientes": ["cebola", "pimentão", "ovo", "mussarela", "presunto"],
    "preco": 40.5,
    "img": "/img/calabresa.jpg",
    "destaque": true
}, {
    "id": 8,
    "nome": "Caipira",
    "ingredientes": ["mussarela", "milho verde", "frango"],
    "preco": 38.5,
    "img": "/img/quatroqueijos.jpg",
    "destaque": true
}, {
    "id": 9,
    "nome": "Napolitana",
    "ingredientes": ["mussarela", "gorgonzola", "provolone", "parmesão"],
    "preco": 55.5,
    "img": "/img/marguerita.jpg",
    "destaque": true
}, {
    "id": 10,
    "nome": "Baiana",
    "ingredientes": ["mussarela", "gorgonzola", "provolone", "parmesão"],
    "preco": 38.5,
    "img": "/img/calabresa.jpg",
    "destaque": true
}, {
    "id": 11,
    "nome": "Meat & Bacon",
    "ingredientes": ["mussarela", "calabresa", "bacon"],
    "preco": 38.5,
    "img": "/img/fracatu.jpg",
    "destaque": true
}, {
    "id": 1002,
    "nome": "Rúcula",
    "ingredientes": ["mussarela", "rúcula", "tomate seco"],
    "preco": 38.5,
    "img": "/img/pepperoni.jpg",
    "destaque": true
}];
// console.log(pizzas[pizzas.length-1].id + 1)



let pizza = [{
    "id": 1002,
    "nome": "Rúcula",
    "ingredientes": ["mussarela", "rúcula", "tomate seco"],
    "preco": 38.5,
    "img": "/img/pepperoni.jpg",
    "destaque": true
}];

let pizza2 = [{
    "id": 1002,
    "nome": "Rúcula",
    "ingredientes": ["mussarela", "rúcula", "tomate seco"],
    "preco": 38.5,
    "img": "/img/pepperoni.jpg",
    "destaque": true
}];


let id = 11;

for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].id == id) {
        console.log(pizzas[i])
       pizzas.splice(i,1);
      
    }
};
console.table(pizzas);