Curso Nivelamento JavaScript
Json: padrao universal de representar dados na forma de Texto. se tiver fora de JavaScript ex: Retorno de uma requisiçao http - fiz requisiçao API- back-end - ele retornou os dados para banco de dados, esses dados vieram forma de JSON - Como os dados estao numa resposta de uma requisiçao http e não JavaScritp obrigatoriamente os dados estarao assim atributos entre aspas duplas " " EXEMPLO: "nome": "Computador", "preço": 3020.0 quando form numero nao precisa esta entre "" - mas os nome dos atributos todos devem estar entre aspas duplas - essa e forma de trafegar objetos JSON forma do JavaScript a exemplo na requisiçao.

Porem dentro do javascript pode ser com aspas ou sem aspas.
//Ex se vc tiver fora do codigo javascript, por exemplo no retorno de uma requisiçao http os dados e os atributos tem que estar entre aspas duplas
// Por exemplo dentro javascript pode usar aspas simples ou duplas ou ate sem aspas os atributos - Exemplo abaixo
const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
    // "due-date": atributo com caracter especial - se tiver no caso o traço - caracter especial tem que colocar entre aspas duplas
}


JavaScript Object Notation: uma forma de notação de objetos JavaScript,de modo que eles possam ser representados de uma forma comum a diversas linguagens. 
Facilmente trafegado entre aplicações em quaisquer protocolos, inclusive o HTTP.

A principal diferença entre um objeto JavaScript padrão e um JSON é o fato do JSON ser na realidade: um texto.
JSON é construído em duas estruturas:

1 Uma coleção de pares nome/valor. Em várias linguagens, isso é realizado como um objeto , registro, struct, dicionário, tabela hash, lista com chave ou array associativo.
2 Uma lista ordenada de valores. Na maioria das linguagens, isso é realizado como um array , vetor, lista ou sequência.

https://www.json.org/json-en.html
