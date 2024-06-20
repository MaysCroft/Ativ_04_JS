// Atividade 04 Exercício 03

const ler = require('readline-sync');

let elemento = [], elem, qtdelem = 0;

for (let i = 1; i <= 5; i++) {
    elem = ler.question(`- ${i}. Digite um Elemento: `);
    elemento.push(elem);
    qtdelem++;
}

console.log("- Quantidade de Elementos cadastrados: " + qtdelem);