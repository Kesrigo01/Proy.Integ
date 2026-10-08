console.log("¡Hola, mundo!");

document.getElementById("miParrofo").innerHTML = "¡Este es un nuevo parrafo";

function mostrarAlerta(){
    alert("¡Hiciste clic en el boton!");
}

let contador = 0;

function contar(){
    contador++;
    document.getElementById("cont").innerHTML = contador;
}