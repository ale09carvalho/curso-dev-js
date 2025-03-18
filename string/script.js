/* .console.log ("Hello word!!!!!!!!!!!!!!!!!!!!");
JavaScript tem 8 tipos de dados
String

==>Strings são úteis para armazenar dados que podem ser representados em forma de texto. 
Strings podem ser criadas como primitivas, a partir de literais de string ou como objetos, usando o String()construtor:
há duas maneiras de acessar um caractere individual em uma string. A primeira é o charAt()método:
"cat".charAt(1); // gives value "a"

A outra maneira é tratar a string como um objeto semelhante a uma matriz, onde caracteres individuais correspondem a um índice numérico:
"cat"[1]; // gives value "a"
*/

/*
console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
*/
//-------------------------------

/*
const num = 14.5;

console.log(`O valor do produto é ${num}`);//interpolação pode colocar expressões dentro das chaves.
console.log("Conversão entre number e string");

const str1 = num.toString(); // converte o num para string
console.log(`Tipo de ${str1}: ${typeof str1}`); // o tipo de str1 (14.5) é string 

const str2 = num.toFixed(2);// converte o num para string e arredonda para 2 casas decimais
console.log(`Tipo de ${str2}: ${typeof str2}`);

const num1 = Number("14.5");// converte a string para number e guarda o resultado na variavel num1
console.log(`Tipo de ${num1}: ${typeof num1}`);

const num2 = parseInt("21", 10);// parseInt converte a string para inteiro e guarda o resultado na variavel num2 convertendo a base 10
console.log(`Tipo de ${num2}: ${typeof num2}`);

const num3 = parseInt("21", 16);parseInt("21", 16);// parseInt converte a string para inteiro e guarda o resultado na variavel num3 convertendo a base 16
console.log(`Tipo de ${num3}: ${typeof num3}`);

const num4 = parseFloat("21.34", 10);// parseFloat converte a string para float e guarda o resultado na variavel num4 convertendo a base 10
console.log(`Tipo de ${num4}: ${typeof num4}`);

//-------------------------------
console.log("Funções de string");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`); //interpolação pode colocar expressões dentro das chaves.

const resultado = str toLowerCase();
console.log(resultado);
console.log(`toLowerCase: ${str.toLowerCase()}`);// e uma função que converte a string para minuscula
//----------------------------
*/
const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`); //interpolação pode colocar expressões dentro das chaves.

console.log(`toUpperCase: ${str.toUpperCase()}`);// e uma função que converte a string para maiuscula

console.log(`charAt: ${str.charAt(3)}`);// e uma função que retorna o caracter na posição 3 - tbm aceita com colchetes --> 
//console.log(`charAt: ${str.[3]}`) //indicando a posição do caracter que deseja retornar

console.log(`replace (primeiro): ${str.replace("i", "$", )}`);// troca a primeira ocorrencia de i por $ - tem outro i que ele nao fez  troca
console.log(`replace (todos): ${str.replace(/i/g, "$", )}`);// caso queira trocar todas as ocorrencias de i por $ - tem que usar uma expressão regular
// str. length - ele e uma propriedade nao e metodo fica com quadrado roxo /qdo propriedade fica com quadrado azul

console.log(`length: ${str.length}`); // retorna o tamanho da string

console.log(`indexOf: ${str.indexOf("i")}`);// como se fosse uma busca - retorna a posição do primeiro i

console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);// ultima ocorrencia de i e qua a posição

console.log(`subtring: ${str.substring(3, 8)}`);// recortar pedaço da string - 3 e a posição inicial e 8 e a posição final / a posição final 1 amais que 
//-------------------------------------
const data = "17/03/2025";// forma de string
const mes = data.substring(3, 5);
//-------------------------------------
const mes = Number(data.substring(3, 5));
console.log(mes);
//=------------------
const valor = R$ 200.00";
const novoValor = valor.toString().replace("." , ",");
//-------------------------

 mes = Number(data.substring(3, 5));
console.log(novoValor);

//--------------------------

console.log(`trim: ${str.trim()}`);// trim e uma funçao que vai gerar uma nova string sem os espaços em branco no inicio e no final 
console.lot(`trim:${str.trim()}`);// 
//-------------------------
