//Escreva um programa que leia um numero inteiro N, mostra na tela uma tabuada de N para 1 a 10
const dados = document.getElementById("dados").innerHTML;
//document.getElementById("dados"): pega o elemento com o id "dados"
//.innerHTML; pega o conteúdo do elemento

const N = Number(dados);

for (let i = 1; i <=10; i++) {// let i = 1: declara a variável i e atribui o valor 1 - i <=10: condição para o loop - i++: incrementa o valor de i em 1
    const produto = i * N;
    console.log (`${N} x ${i} = ${produto}`);// console.log (`${N} x ${i} = ${produto}`): imprime o resultado da multiplicação
}
