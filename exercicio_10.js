function folhaPagamento (){

    let nome = prompt ("Nome do funcionario: ");
    let salario = Number(prompt("Salario bruto: "));

    let desconto = salario * 0.08;
    let liquido = salario - desconto;

    console.log("Nome: " + nome);
    console.log("Salario: " + salario);
    console.log("Desconto do INSS: " + desconto);
    console.log("Liquido: " + liquido);

}