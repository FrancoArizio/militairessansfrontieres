const numeroEdad = parseInt(prompt("ENTER AGE"));

function accessDenied(accessDenied) {
    return alert("ACCESS DENIED")
}

if (numeroEdad < "18") {
    accessDenied()
    window.location.href = "pages/deny.html"
}
else {
    alert("ACCESS GRANTED")
    let listaDeNombres = "";
    let nombreIngresado = prompt("ENTER EVERY SOLDIER NAME, TYPE STOP WHEN DONE")

    while (nombreIngresado !== "STOP") {
        listaDeNombres = listaDeNombres + "\n" + nombreIngresado;
        nombreIngresado = prompt("ENTER EVERY SOLDIER NAME, TYPE STOP WHEN DONE")
    }

    alert("THIS SOLDIERS HAVE BEEN REGISTRED" + listaDeNombres)

}






