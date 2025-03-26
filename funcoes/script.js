// FUNÇOES JAVA SCRIPT
// chamar a funçao soma(3,4)

function soma1(num1, num2) {
    return num1 + num2;
}

// Outras forma declara a função

// declarar funçao como sendo constante
// soma2 como function q recebe num1, num2
const soma2 = function(num1, num2) {
    return num1 + num2; 
}

// funçao anônima soma3 vai receber como argumento 2 num e retornar 
// nao precisa da palavra function porem insere a seta =>  vai levar neste corpo return num1 + num2
//(num1, num2) se tiver mais de 1 argumento entre parente caso 1 argumento nao precisa parentes
const soma3 = (num1, num2) => { 
    return num1 + num2; 
}

//obs qdo for 1 linha { return num1 + num2;} retornando a funçao NAO precisa colocar { }
// Pode colocar dessa forma --- resumido
const soma4 = (num1, num2) => num1 + num2; 

// dobro1 uma function que recebe um numero qualquer  e retorna o num x 2
const dobro1 = function(num) {
    return num * 2;
}

// em uma linha sem { } -- resumido nao precisa nem parentes
const dobro2 = num => num * 2;

// todas as funçoes anteriores retornam um valor


// Funcao que nao tem retorno definido, retorna undefined 
// tem funçao que nao retorna somente executa mas nao retorna nada

function mostrarPreco(preco) {
    console.log(`PRECO = ${preco}`);
}
// saida pro padrao retorna  undefined
//=================================================================================
// Variaveis definidas dentro da funcao pertencem somente ao escopo da funcao

function areaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio;
}
// tentar fora da funçao dara erro 
//console.log(pi);


function areaCirculo(raio) {
    var pi = 3.14;
    return pi * raio * raio;
}
console.log(pi);
// tentar fora da funçao anda que seja com variavel var tbm  dara erro 
// var ele so vaza escopo em estrutura de controle if else, for while em funçao nao

//====================================================================================
// Function hoisting: declaracoes de funcoes sao "movidas" para cima pelo motor do JavaScript


//hoisting: mesno colocando teste(x) acima ele tbm roda funciona qdo o motor javaScript interpreta o codigo 
// todas definiçoes de funçoes sao movida para cima e depois rodar o que precisa  

teste(5);
function teste(x) {
    console.log("TESTE " + x);
}
//------------------------------------------------------------------------------------

// Funcoes podem ser passadas como argumento

function triplo(num) {
    return num * 3;
}
// aplicar vai receber funçao f e tambem um numero -- 
function aplicar(f, num) {
    const result = f(num); // vai chamar a funçao f passando como argumento esse numero
    console.log("RESULTADO = " + result);
}

// a funçao aplicar chamou a funçao triplo de 10
aplicar(triplo, 10);

// funçao aplicar passando a funçao dobro de 10
//aplicar(dobro1,10) ---- script.js:85 RESULTADO = 20

