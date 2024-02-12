let numeroSecreto =0;
let intentos =0;
let listaNumerosSorteado=[]; 
let numeroMaximo= 10;
function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
  console.log(intentos);
  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
  }else{
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
    }else{
        asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
   return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
}

//funcion para numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    //Si el numero generado esta incluido en la listahace algo, sino hace otra
    //el metodo include busca dentro del arreglo si ya esta y regresa un true o false

    //preguntamos si ya se sortearon todos los numeros
    if(listaNumerosSorteado.length == numeroMaximo){
      asignarTextoElemento('p','ya has probado con todos los numeros posibles')
    }else{

      if(listaNumerosSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }else{
        //coloca el elemento al final
        listaNumerosSorteado.push(numeroGenerado);
        return numeroGenerado;
  
      }

    }
   
   
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego de numero secreto!');
  asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  //limpar caja
  limpiarCaja();
  //indicar mensaje de bienvenida intervalo de numeros
  condicionesIniciales();
  //generar nuevo numero aleatorio

  //reiniciar intentos
  //deshabilitar boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'false');
  //reiniciar intentos
  
}

//eliminamos variables, se encapsulo una funcion para diferentes elementos, se redujo codigo
condicionesIniciales();
