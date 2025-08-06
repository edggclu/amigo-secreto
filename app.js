// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let caja = document.getElementById("amigo");
    let nuevoAmigo = caja.value;

    if(nuevoAmigo == ""){
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nuevoAmigo);
        //document.getElementById("amigo").value = '';
        caja.value = '';
        actualizarLista();
    }
}

function actualizarLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = amigos.length; i > 0; i--) {
        let nuevoAmigo = amigos[i - 1];
        let nuevoElementoLista = document.createElement('li');
        nuevoElementoLista.innerHTML = nuevoAmigo;
        lista.appendChild(nuevoElementoLista);
    }
}

function sortearAmigo() {
    let numeroMaximo = amigos.length;
    let numeroRandom = Math.floor(Math.random() * numeroMaximo);

    let amigoSorteado = amigos[numeroRandom];
    document.getElementById('resultado').innerHTML = amigoSorteado;

}