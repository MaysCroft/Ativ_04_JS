// Atividade 04 Exercício 08

const ler = require('readline-sync');

let nums = [], cont = 0;

for (let i = 1; i <= 10; i++) {
    
    let num = ler.questionInt(`- ${i}. Digite um Numero: `);
    nums.push(num);

    if (num % 2 == 0) {
        cont++;
    }
}

console.log(`- Esse Array possui - ${cont} - números PARES!`);