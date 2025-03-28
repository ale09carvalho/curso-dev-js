
const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
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
    }
};
//{id: 53, date: '2021-10-20', items: Array(2), client: {…}}
const { id, client } = obj;

console.log (id);
console.log (client);

// multiplinca o preço x qtd

function subTotal(item){
    return item.price * item.quantity
}

console.log(subTotal(obj.items[1]));
console.log(subTotal(obj.items[0]));

//outra forma e inseri direto entre { price, quantity} pode eliminar item.

function subTotal( { price, quantity } ) {
    return price * quantity;
}

console.log(total(obj));


// funçao ja recebe a lista na funçao desestruturada 
function total( {items} ) {
    let soma = 0;
    for (let i=0; i<items.length; i++) {
        soma = soma + subTotal(items[i]);
    }
    return soma;
}

console.log(total(obj));

//A desestruturaçao pode ser feita tambem em arrays

const [item1, item2] = obj.items;


console.log(item1);

console.log(item2);
