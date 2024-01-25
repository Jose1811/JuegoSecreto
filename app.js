let numeroSecreto = 6;
let intentos = 1;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return; 
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            //el usuario no acertó
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
         intentos++;
         limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = ''; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los números
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todo los números posibles');
    }else{

    //Si el número generado esta incluido en la lista
    if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteado.push(numeroGenerado)
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja
    //indicar mensaje de invertalo de numero
    //genarar el número aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

mensajesIniciales();