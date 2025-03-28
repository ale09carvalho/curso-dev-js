//fazer um programa mostre na tela o valor total gasto com funcionarios terceirizados.
//Partir do projeto "terceirizado" que ja esta começando, e implementar as dua funções
//funcionariosTerceirizados e custoTotal.

// saida Custo total dos funcionarios terceirizados: R$ 5200
// Custo total dos funcionários terceirizados: R$ 5200.00

// Entrada direto no codigo fonte. 
const dados = [
    {
      nome: "Maria Silva",
      valorHora: 80.0,
      horasTrabalhadas: 20,
      terceirizado: true,
    },
    {
      nome: "João Rocha",
      valorHora: 60.0,
      horasTrabalhadas: 25,
      terceirizado: false,
    },
    {
      nome: "Tiago James",
      valorHora: 80.0,
      horasTrabalhadas: 10,
      terceirizado: true,
    },
    {
      nome: "Ana Carla",
      valorHora: 70.0,
      horasTrabalhadas: 40,
      terceirizado: true,
    },
    {
      nome: "Pedro Paulo",
      valorHora: 50.0,
      horasTrabalhadas: 25,
      terceirizado: false,
    },
  ];
  //---------------------------------------------------------------------------
// FUNCAO funcionariosTerceirizados
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna uma lista contendo somente os funcionários terceirizados
//---------------------------------------------------------------------------
function funcionariosTerceirizados(list) {
    const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].terceirizado) {
      result.push(list[i]);
    }
  }
  return result;
}

// Solução com função de alta order:
function funcionariosTerceirizados2(list) {
  return list.filter((x) => x.terceirizado);
}
//---------------------------------------------------------------------------
// FUNCAO custoTotal
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna um número representando o custo total dos funcionários
//---------------------------------------------------------------------------
function custoTotal(list) {
    let total = 0;
  for (let i = 0; i < list.length; i++) {
    const subTotal = list[i].valorHora * list[i].horasTrabalhadas;
    total = total + subTotal;
  }
  return total;
}
//---------------------------------------------------------------------------
// SCRIPT PRINCIPAL
//---------------------------------------------------------------------------

const terceirizados = funcionariosTerceirizados(dados);

const custoTerceirizados = custoTotal(terceirizados);


console.log("Custo total dos funcionarios terceirizados: R$ " + custoTerceirizados );

console.log(`Custo total dos funcionários terceirizados: R$ ${custoTerceirizados.toFixed(2)}`);




