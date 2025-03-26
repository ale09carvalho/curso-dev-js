// parse / stringify
// JASON pode vim em uma requisiçao na forma de texto esse texto e uma string
// para que converta esse objeto string para objeto javaScript e necessario realizar o parse desse string

// Exemplo abaixo const txt dentro da crase - um Json na forma de texto todos entre aspas 
const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;
// txt --> '{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}' nao e expansivel somente texto
// typeof txt - verificara que se trata de string nao e objeto

//para converter texto para um objeto equivalente javascript
const obj = JSON.parse(txt);
// verifica que converte trata de obj
// obj  --> {nome: 'Computador', price: 50.9, due-date: '2025-04-15'} e expansivel 
//due-date : "2025-04-15"
// nome : "Computador"
// price : 50.9
// [[Prototype]]:Object

// erro --> undfined - esse txt nao possue o atributo name
console.log(txt.name);

// Computador - agora o obj foi construido o objeto struturado apartir do const txt

console.log(obj.price);
//saida: 50.9  -- preço

console.log(obj.nome);
// saida -- Computador


// como faço para pegar objeto no js - como converte para o JSON na forma de texto
// ex: caso queira manda no corpo de uma requisiçao
// JSON.stringify(obj) pega o objeto java script e converte para texto
const text = JSON.stringify(obj);
// txt -- saida '{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}' -- converte novamente para texto

