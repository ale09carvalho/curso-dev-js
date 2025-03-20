//Escreva um prog que leia uma quantidade de numeros e no final mostro o mair dos numenros
//conteudo no html

//const dados = document.getElementById("dados");
//pega o elemento inteiro
//console.log(dados);

//pega so conteudo do elemento
//console.log(dados.innerHTML);

//ja pega o elemento e ja extrai o conteudo dele e jogo o resultado em dados
//const dados = document.getElementById("dados").innerHTML;
//console.log(dados);


//recortar string pegar cada elemento separadamente colocando \n quebra de linha 
//const dados = document.getElementById("dados").innerHTML.split("\n");
//console.log(dados);
// resultado veto com cada elemento separado na forma de string


// resultado veto com cada elemento separado na forma de conversao de  string para numero
// cria um arrays de 5 elementos cada e um numero
//const dados = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));
//console.log(dados);


// se achar o anterior muito grande pode fazer de forma mais legivel
const conteudo = document.getElementById("dados")
const dados =  conteudo.innerHTML.split("\n").map(x => Number(x));
console.log(dados);

let maior = dados[0];

for (let i = 1; i < dados.length; i++) {
    if (dados[i] > maior) {
        maior = dados[i];
    }
}
console.log(maior);
