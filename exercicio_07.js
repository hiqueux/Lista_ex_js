function picoles() {
    let codigo = prompt("Digite o código do picolé: ");

    switch (codigo) {

        case "a":
            console.log("Chocolate - R$ 1,50");
            break;

        case "b":
            console.log("Morango - R$ 2,50");
            break;

        case "c":
            console.log("Creme - R$ 2,50");
            break;

        case "d":
            console.log("Manga - R$ 3,20");
            break;

        case "e":
            console.log("Melancia - R$ 3,40");
            break;

        case "f":
            console.log("Vanilla Ice - R$ 3,00");
            break;

        case "g":
            console.log("Céu Azul - R$ 3,60");
            break;

        case "h":
            console.log("Brownie - R$ 4,00");
            break;

        case "i":
            console.log("Hawaiano - R$ 5,00");
            break;

        default:
            console.log("Código inválido!");
    }
}