// dentro do codigo javascript, podemos criar um objeto 

const produto = {
    // nome dos atributos
    nome:"Computador",
    preco: 2000,
}
// O JSON ele nao é somente para codigo java script, e um padrão universal de representar dados na forma de texto
//Exemplo se vc tiver fora do codigo javascript, por exemplo em um retorno de uma requisiçao http os dados e os atributos tem que estar entre aspas duplas.
// Ja por exemplo dentro javascript pode usar aspas simples ou duplas ou ate sem aspas os atributos - Exemplo abaixo

const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}
 
 // objetos usa-se chaves { }
 // arrays usa-se colchetes [ ]
const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
    // "due-date": atributo com caracter especial - se tiver no caso o traço - caracter especial tem que colocar entre aspas duplas
}
const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [ // e um array de objetos qdo e assim colocar entre colchetes
        // dentro do array tem objetos
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
        // active: null    --- tambem aceita nulo
    }
};
console.log (obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.date);
console.log(obj3.client);
console.log(obj3.client.name);
console.log(obj3.id);
