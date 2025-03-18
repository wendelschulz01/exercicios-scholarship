// Importa o módulo readline 
const readline = require('readline');

// Cria a interface input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout });

// Função para processar a entrada do usuário
function processarEntrada(resposta) {
  // Converte a entrada em um array de números
  let numeros = resposta.split(',').map(Number);
  let soma = 0;

  for (let numero of numeros) {
    if (!Number.isInteger(numero)) { // Verifica se o elemento NÃO é um inteiro
      console.log(`Erro: Algum elemento não é um número inteiro.`);
      break; // Interrompe o loop ao encontrar um não-inteiro
    } else {
      soma += numero;  
    }
  }
  console.log(`Soma total dos números inteiros: ${soma}`);
    
  // Fecha a interface de leitura
  rl.close();
}

// Solicita os números ao usuário
rl.question('Digite números separados por vírgula: ', processarEntrada);