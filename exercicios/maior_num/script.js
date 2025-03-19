//Escreva um programa que leia uma quantidade de números, e no final mostra o mair dos numeros.

const quantidade = document.getElementById("quantidade").innerHTML.split('\n').map(x => Number(x));
//getElementsById pega o elemento pelo id, 
// innerHTML pega o conteudo do elemento, 
//split separa o conteudo por quebra de linha, map percorre o array e Number transforma o conteudo em numero
//map(x => Number(x)); percorre o array e transforma o conteudo em numero

console.log(quantidade);// console.log mostra o conteudo no console do navegador

let maior = quantidade[0]; //variavel maior recebe o primeiro numero do array

for (let i=1; i<quantidade.length; i++) {// for percorre o array
    if (quantidade[i] > maior) {
        maior = quantidade[i];
    }
}

console.log(maior);
