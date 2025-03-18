/* .console.log ("Hello word!!!!!!!!!!!!!!!!!!!!");
JavaScript tem 8 tipos de dados
String
Número
Bigint
Boolean
Indefinido
Nulo
Símbolo
Objeto
==> pode conter objetos internos e objetos definidos pelo usuário :
* var a ====> ela vaza escopo de uma estrutura de controle. não e correto utiliza-la
var a ====> ela vaza escopo de uma estrutura de controle.
let  forma preferida de declaração de variáveis. é uma melhoria às declarações com var
let tem escopo de bloco - Um bloco é uma porção de código cercado por {}. Um bloco vive dentro dessas chaves. Tudo o que estiver cercado por chaves é um bloco.
Const - Variáveis declaradas com const mantêm valores constantes.
*/

const x = 10;

if (x > 0) {
  var a = 100;
  let b = 200;
  const c = 300;
  console.log("imprimindo dentro do if");
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("imprimindo fora do if");
console.log(a);
console.log(b);
console.log(c);
//------------------------------------------------------
//x = 20;
// dara um erro pois nao e possivel modificar uma constante.
console.log("imprimido resultado do for");

//nao usar o const pois ela nao pode ser modificada.
// usar o let para poder modificar pois ela sera modificada dentro do for.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
