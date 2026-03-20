function folhaPagamentoPlus() {

    let nome = prompt("Nome do funcionário: ");
    let salario = Number(prompt("Salário bruto: "));
    let taxa = 0;

    if (salario <= 1000) {
        taxa = 0.08;

    } else if (salario <= 1500) {
        taxa = 0.085;

    } else {
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let liquido = salario - desconto;

    console.log("Nome: " + nome);
    console.log("Salário informado: R$ " + salario);
    console.log("Taxa aplicada: " + (taxa * 100) + "%");
    console.log("Desconto do INSS: R$ " + desconto);
    console.log("Salário líquido: R$ " + liquido);
}