// Atividade 04 Exercício 07

const ler = require('readline-sync');

let nums = [], soma = 0;

for (let i = 1; i <= 10; i++) {
    let num = ler.questionInt(`- ${i}. Digite um Numero INTEIRO: `);
    nums.push(num);
}

console.clear();

console.log("--------------- OPÇÕES ---------------");
console.log("- 1. Ordem Direta \n- 2. Ordem Inversa \n- 3. Soma dos Números Digitados \n- 0. Sair do Programa");
let opt = ler.questionInt("=> ");
console.log("--------------------------------------");

switch (opt) {
    case 1:
        console.log("----- ORDEM DIRETA -----");
        for (let i = 0; i < nums.length; i++) {
            console.log(`- Posição ${i + 1}: ${nums[i]}`);
        }
        console.log("------------------------");
        break;

    case 2:
        console.log("----- ORDEM INVERSA -----");
        for (let i = nums.length - 1; i >= 0; i--) {
            console.log(`- Posição ${i + 1}: ${nums[i]}`);
        }
        console.log("-------------------------");
        break;

    case 3:
        console.log("----- SOMA DOS NÚMEROS -----");
        for (let i = 0; i < nums.length; i++) {
            console.log(`- Posição ${i + 1}: ${nums[i]}`);
            soma += nums[i];
        }
        console.log("----------------------------");
        console.log(`- Total: ${soma}`);
        console.log("----------------------------");
        break;

    case 0:
        console.clear();
        console.log("----- Finalizando Programa! -----");
        break;

    default:
        console.log("Código Inválido!");
        break;
}