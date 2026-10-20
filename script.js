const nombre = "Valeria";
console.log("Hola, soy " + nombre + " y este es mi juego de adivinar el número");


const numeroSecreto = 7;
let intentos = 0;
let adivinado = false;

console.log("Suma: 5 + 3 =", 5 + 3);
console.log("Resta: 10 - 4 =", 10 - 4);
console.log("Multiplicación: 6 * 7 =", 6 * 7);
console.log("División: 20 / 4 =", 20 / 4);
console.log("Módulo: 17 % 5 =", 17 % 5);


alert("¡Bienvenida, " + nombre + "! Adivina el número del 1 al 10");

while (!adivinado) {
  let respuesta = prompt("¿Cuál es el número secreto? (1 al 10)");
  let numero = Number(respuesta);
  intentos++;

  if (numero === numeroSecreto) {
    alert("¡Correcto, " + nombre + "! Lo lograste en " + intentos + " intentos");
    adivinado = true;
  } else if (numero < numeroSecreto) {
    alert("Muy bajo, intenta de nuevo");
  } else {
    alert("Muy alto, intenta de nuevo");
  }
}

console.log("Juego terminado en " + intentos + " intentos");
