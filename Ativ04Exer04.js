// Atividade 04 Exercício 04

const ler = require('readline-sync');

let elemento = [], elem; 
let cont = 0, check = false;

for (let i = 1; i <= 5; i++) {
    elem = ler.question(`- ${i}. Digite um Elemento: `);
    elemento.push(elem);
}

console.log("----- Pesquisa de Elementos -----");
let perg = ler.question("- Digite um Elemento: ");
console.log("---------------------------------");

for (let i = 0; i < elemento.length; i++) {
    if (perg === elemento[i]) {
        cont++;
        check = true;
    }
}

if (check) {
    console.log(`- O Elemento - ${perg} - foi adicionado - ${cont} - vezes.`);
} else {
    console.log(`----- Fechando Sistema -----`);
}