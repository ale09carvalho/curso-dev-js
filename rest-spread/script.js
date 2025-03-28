//REST
//valores passado com virgula sao convertido em um arrays
// REST: valores passados com virgula => array

// funçao q calcula a soma e um arrays
function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

//const result1 = sum(1,2,3, 4);
//console.log(result1);
//************* */
const result1 = sum(2, 3, 10, 5);
console.log(result1);

//----------------------------------
// SPREAD:(espalhar) array => pega o array e transforma em valores separados por virgula
const myNumbers = [2, 3, 10, 5];
const result3 = Math.max(4, 7, 2);
console.log(result3);

//const result4 = Math.max(myNumbers); // Nao funciona
// ..myNumbers tranforma em valores separado por virgula
const result4 = Math.max(...myNumbers);
console.log(result3);

//****************************************************** */
// SPREAD: objeto => membros separados por virgula
//  ...item  vai espalhar em dados por virgula e a chave vira um novo obj

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };

const cloneItemPlus = { ...item, weigth: 10 };
