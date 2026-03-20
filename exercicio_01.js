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

    while (true) {
        let numero = parseFloat(prompt("Digite um número (0 para encerrar):"));

        if (numero === 0) {
            break;
        }

        if (isNaN(numero)) {
            alert("Digite um número válido!");
        } else {
            soma += numero;
        }
    }

    alert("A soma dos números é: " + soma);
}
