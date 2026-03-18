// console.log("Hello World!");

// let nome = "Henrique";
// console.log(nome);

// const pi = 3.14;
// console.log(pi);

// let n1 = 1;
// let n2 = 2;

// console.log(n1+n2);

// function somar(x, y){
//     console.log(x+y);
// }

// somar (1,1);

// function saudacao(nome) {
//     console.log("Olá, " + nome + "!");
// }

// saudacao("Henrique");


//Questão 1

function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while(continuar === true) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar):"));

        // soma = soma +numero;

        if (isNaN(numero)) {
            alert("Por favor, digite um número válido!");

        } else {
            soma += numero;
        }

        continuar = confirm("Deseja adicionar mais um número.");
    }
    alert("A soma dos números é: " + soma);
}

somarNumeros();