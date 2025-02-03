// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var nombresAmiSecreto = [];

function agregarAmigo(){
    if(validarInput()){
        nombresAmiSecreto.push(getInputAmigo());
        console.log(nombresAmiSecreto);
        limpiarInputNombre();
        actualizarUlListaAmigos();
    }
    
    //agregarAmigos(nombreAmigo);
}

function agregarAmigos(...amigos) {
    amigos.forEach(nombre => {
        nombresAmiSecreto.push(nombre);
    });
}

function getInputAmigo() {
    return document.getElementById("amigo").value.replace(/\s+/g,' ').trim();
}

function validarInput() {
    inputAmigo = getInputAmigo();
    elResultado = document.getElementById("resultado");
    if(inputAmigo == '') {
        elResultado.innerText = "No puede ser vacío, debe ingresar un nombre.";
    } else if (!isNaN(inputAmigo.trim().charAt(0))) {
        elResultado.innerText = "El primer caracter debe ser distinto de un número.";
    } else if (inputAmigo.split(' ').length > 1) {
        elResultado.innerText = "Puede ingresar únicamente un solo nombre.";
    } else {
        limpiarUlResultado();
        return true;
    } 
    return false;
}

function actualizarUlListaAmigos() {
    limpiarUlListaAmigos();
    let listaAmigos = document.getElementById("listaAmigos");
    nombresAmiSecreto.forEach(nombre => {
        let liNombreAmigo = document.createElement("li");
        liNombreAmigo.appendChild(document.createTextNode(nombre));
        listaAmigos.appendChild(liNombreAmigo);
    });
}

function resetearJuego() {
    vaciarNombresAmiSecreto();
    limpiarInputNombre();
    limpiarUlListaAmigos();
    limpiarUlResultado();
}

function vaciarNombresAmiSecreto() {
    nombresAmiSecreto = [];
}

function limpiarInputNombre() {
    document.getElementById("amigo").value = "";
}

function limpiarUlListaAmigos() {
    document.getElementById("listaAmigos").innerHTML = "";
}

function limpiarUlResultado() {
    document.getElementById("resultado").innerHTML = "";
}

