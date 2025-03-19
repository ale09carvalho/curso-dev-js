//Escreva um programa que leia 3 valores reais, para os quais voce devera calcular e mostras a media ponderada, sendo que o 1º valor tem peso 2.
// o 2º valor tem peso 3 e o 3º valor tem peso 5.
//A media ponderada e a soma de todos os valores multiplicados pelo seu respectivo peso, dividido pela soma dos pesos.

const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));
//document.getElementById() pega o elemento do html pelo id --'dados'
//innerHTML.split('\n') pega o conteudo do elemento e divide em um array de strings, separando por quebra de linha
//map(x => Number(x)) transforma cada string do array em um numero 

const media = (dados[0] * 2 + dados[1] * 3 + dados[2] * 5) / 10;

console.log(media.toFixed(1));// toFixed(1) arredonda o numero para 1 casa decimal
