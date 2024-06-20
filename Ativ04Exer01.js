// Atividade 04 Exercício 01

const ler = require('readline-sync');

let nums = [], maior = 0;

for (let i = 1; i <= 5; i++) {

    let num = ler.questionInt(`- ${i}. Digite um Numero: `);
    nums.push(num);

    if (num > maior) {
        maior = num;
    }
}

console.log("O MAIOR número digitado é: " + maior);