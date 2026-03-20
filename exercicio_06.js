function vogalOuConsoante() {

    let letra = prompt("Digite uma letra: ").toLowerCase();

    if (
        letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"
    
    ) {
        console.log("Vogal");

    } else {
        console.log("Consoante");
        
    }
}