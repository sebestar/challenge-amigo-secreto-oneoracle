// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

resetearJuego();
var nombresAmiSecreto = [];
const MIN_AMIGOS_JUEGO = 2;

function agregarAmigo() {
    if(validarInput()){
        agregarAmigos(getInputAmigo());
        limpiarInputNombre();
        actualizarUlListaAmigos();
    }
}

function agregarAmigos(...amigos) {
    amigos.forEach(nombre => {
        nombresAmiSecreto.push(nombre);
    });
}

function sortearAmigo() {
    limpiarUlResultado();
    if(amigosDisponibles()) {
        realizarSorteo();
    } else {
        actualizarResultado(`Necesitas al menos ${MIN_AMIGOS_JUEGO} amigos para sortear`);
    }
}

function realizarSorteo() {
    indiceNombre = Math.floor(Math.random() * nombresAmiSecreto.length);
    actualizarResultado(`El nombre sorteado es: ${nombresAmiSecreto[indiceNombre]}`);
}

function amigosDisponibles() {
    return (nombresAmiSecreto.length >= MIN_AMIGOS_JUEGO);
}

function getInputAmigo() {
    return document.getElementById("amigo").value.replace(/\s+/g,' ').trim();
}

function validarInput() {
    inputAmigo = getInputAmigo();
    if(inputAmigo == '') {
        actualizarResultado("No puede ser vacío, debe ingresar un nombre.");
    } else if (!isNaN(inputAmigo.trim().charAt(0))) {
        actualizarResultado("El primer caracter debe ser distinto de un número.");
    } else if (inputAmigo.split(' ').length > 1) {
        actualizarResultado("Puede ingresar únicamente un solo nombre.");
    } else {
        limpiarUlResultado();
        return true;
    } 
    return false;
}

function actualizarResultado(texto) {
    elResultado = document.getElementById("resultado");
    elResultado.innerText = texto;
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

