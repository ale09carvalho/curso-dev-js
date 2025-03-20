// Um programa ler coleçao de valores, depois mostre quanto destes estao dentro intervalo [10,20]
// e quantos estao fora do intervalo

const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

let contFora = 0;
let contDentro = 0;

for (let i = 0; i < dados.length; i++) {
    if (dados[i] >= 10 && dados[i] <= 20) {
        contDentro = contDentro +1 ;
    } else {
        contFora++;
    }
}

console.log(`${contDentro} dentro do intervalo`);
console.log(`${contFora} fora do intervalo`);

