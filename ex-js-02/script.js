// Importa o módulo readline
const readline = require('readline');

// Cria a interface input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que verifica se um número é primo
function nPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Se divisível, não é um número primo
    }
  }
  return true; // Se não foi divisível por nenhum número, é primo
}

// Função que processa a entrada do usuário
function processarEntrada(resposta) {
  let numero = Number(resposta);

  if (ehPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
  } else {
    console.log(`${numero} não é um número primo.`);
  }

  rl.close(); // Encerra a interface readline
}

// Solicita o número ao usuário
rl.question('Digite um número para verificar se ele é primo: ', processarEntrada);