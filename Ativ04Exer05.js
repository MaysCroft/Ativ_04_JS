// Atividade 04 Exercício 05

const ler = require('readline-sync');

let nomes = [], idades = [];
let check = true;

while (check) {

    console.log("----------------------------------------------------------------------");
    let nome = ler.question("- Informe seu Nome ou digite 'SAIR' para finalizar: ").toUpperCase();
    let idade = ler.questionInt("- Informe sua Idade ou digite '0' para finalizar: ");
    console.log("----------------------------------------------------------------------");

    if (nome === 'SAIR') {
        check = false;
    } else if (idade === '0') {
        check = false;
    } else {
        nomes.push(nome);
        idades.push(idade);
    }
}
console.clear();

console.log("----- Nomes e Idades Cadastrados: -----");

for (let i = 0; i < nomes.length; i++) {
    console.log(`- Nome: ${nomes[i]}`);
    console.log(`- Idade: ${idades[i]}`);
    console.log("---------------------------------------");
}