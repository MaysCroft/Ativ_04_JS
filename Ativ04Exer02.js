// Atividade 04 Exercício 02

const ler = require('readline-sync');

let elemento = [], elem;

for (let i = 1; i <= 5; i++) {
    let elem = ler.question(`- ${i}. Digite um Elemento: `);
    elemento.push(elem);
}
console.clear();

console.log("----- Os Elementos cadastrados foram: -----");

for (let i = 0; i < elemento.length; i++) {
    console.log(`=> ${elemento[i]}`);
}

console.log("-------------------------------------------");