function sera_o_no_sera(){
    let anio = prompt("introduce un año:");
    if ((anio % 4 === 0) && (anio % 100 !== 0) || (anio % 400 === 0)){
        alert("El año es " + anio + " es bisiesto");
    }else{
        alert("El año es " + anio + " no es bisiesto");
    }
}

function adivinanza() {
    let limite = prompt("¿Cuantas veces quiere jugar?");
    let contador = 0;
    let usuarioGana = 0;
    let usuarioPierde = 0;

    while (contador < limite){
        let numeroRandom = Math.floor(Math.random() * 100) + 1;
        let usuarioAdivinanza = parseInt(prompt("intente adivinar mi numero >:)"));
        if (usuarioAdivinanza === numeroRandom){
            alert("Maldita sea, has adivinado >:(");
            usuarioGana++;
            contador++;
        }else{
            alert("Una vez mas he ganado >:)")
            usuarioPierde++;
            contador++;
        }
    }
    if (usuarioGana > usuarioPierde){
        alert("Has ganado >:C");
    }else if (usuarioGana === usuarioPierde){
        alert("Hemos empatado :0");
    }else{
        alert("Gane >:D");
    }
}
