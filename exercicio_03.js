function balancoAnual() {
    let ganhoAnual = 0;
    let gastoAnual = 0;
    const meses = 12;

    for (let i = 1; i <= meses; i++) {

        let ganho = Number(prompt("Ganho do mês " + i + ": "));
        let gasto = Number(prompt("Gasto do mês " + i + ": "));

        ganhoAnual += ganho;
        gastoAnual += gasto;
    }

    let saldo = ganhoAnual - gastoAnual;

    console.log("Ganho bruto anual: R$ " + ganhoAnual);
    console.log("Gasto anual: R$ " + gastoAnual);
    console.log("Saldo anual: R$ " + saldo);

    if (saldo > 0) {
        console.log("A empresa teve lucro");
    } else if (saldo < 0) {
        console.log("A empresa teve prejuízo");
    }
}