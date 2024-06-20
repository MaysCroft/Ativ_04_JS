// Atividade 04 Exercício 09

const ler = require('readline-sync');

let nomes = [], check = false;

for (let i = 1; i <= 10; i++) {
    let nome = ler.question(`- ${i}. Digite um Nome: `);
    nomes.push(nome);
}

console.log("----- Pesquisa de Nomes -----");
let perg = ler.question("- Digite um Nome: ");
console.log("-----------------------------");

for (let i = 0; i < nomes.length; i++) {
    if (perg === nomes[i]) {
        check = true;
    }
}

if (check) {
    console.log(`----- ACHEI! -----`);
} else {
    console.log(`----- NÃO ACHEI -----`);
}