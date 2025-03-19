// TAMANHO DO ARRAY

const valores = ["Maria", 37, false, 1.64];// arrays e heterogeneo pode ter varios tipos de dados
const t1 = valores.length;//length pega o tamanho do array

console.log("Teste length");
console.log(t1);

// REMOVER ELEMENTOS DO ARRAY:

const nomes = ["Maria", "João", "Ana", "Marcos"];
const r1 = nomes.pop();// funçao pop remove o ultimo elemento do array
const r2 = nomes.shift();// funçao shift remove o primeiro elemento do array

console.log("Teste pop e shift");
console.log(r1);
console.log(r2);
console.log(nomes);

// INSERIR ELEMENTOS:

const alturas = [1.65, 1.82, 1.7];
alturas.push(1.75); // push insere um elemento no final do array (1.75)
alturas.unshift(1.58);//unsift insere um elemento no inicio do array (1.58)

console.log("Teste push e unshift");
console.log(alturas);

// INSERIR E REMOVER GERAL

const letras = ["A", "B", "C", "D", "E", "F"];

letras.splice(2, 3);// splice remove 3 elementos a partir da posição 2
console.log(letras);

letras.splice(2, 3, "X", "Y");// splice remove 3 elementos a partir da posição 2 e insere X e Y
console.log("Teste splice");
console.log(letras);

letras.splice(2, 0, "X", "Y");// Splice insere X e Y a partir da posição 2
console.log("Teste splice");
console.log(letras);


// CONCATENAR ARRAYS - juntar 2 ou mais arrays

const meninas = ["Maria", "Ana"];
const meninos = ["João", "Marcos"];

const todos = meninas.concat(meninos);// cancat junta os arrays meninas e meninos
console.log("Teste concat");
console.log(todos);

// ACESSO E ATRIBUIÇÃO DE ELEMENTOS

const idades = [20, 30, 40, 50];
idades[1] = 38;// ACESSANDO POSIÇAO 1 E ATRIBUINDO O VALOR 38

console.log("Teste acesso e atribuição");
console.log(idades);

// PERCORRER ARRAY

const frutas = ["Banana", "Laranja", "Uva"];

console.log("Teste percorrer array");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// PERCORRER ARRAY COM FOREACH - traduçao foreach e para cada 

console.log("Teste percorrer array com forEach");// funçao que pode receber uma funçao como argumento
frutas.forEach(item => {// funçao forEach percorre o array e executa uma funçao para cada elemento
    console.log(item);
});
