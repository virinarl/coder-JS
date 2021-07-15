//Número aleatorio entre 1 y 999
const aleatorio = parseInt(Math.random() * 1000);
console.log(aleatorio);
let numerosElegidos = [];

//Evento
$(document).ready(function () {
  $("#enviar").click(getNumber);
});

function getNumber() {
  //Variables necesarias para la ejecución
  let containerText = $("#numero");
  let containerLabel = $("#nuevoIntento");
  let eleccion = parseInt(containerText.val());

  //Cada uno de los números elegidos por el usuario
  $("body").append("<p id='" + eleccion + "'>" + eleccion + "</p>");

  //Incorporar cada elemento elegido a un array

  numerosElegidos.push(eleccion);

  if (eleccion > aleatorio) {
    containerLabel.html(
      eleccion + " es más grande que el número aleatorio. Intenta de nuevo"
    );
  } else if (eleccion < aleatorio) {
    containerLabel.html(
      eleccion + " es más chico que el número aleatorio. Intenta de nuevo"
    );
  } else if (Number.isNaN(eleccion)) {
    containerLabel.html("Por favor, ingresa un número válido");
    numerosElegidos.pop();
    $("#NaN").remove();
  } else {
    containerLabel.html(
      "Ganaste!!!! Lo lograste en " +
        numerosElegidos.length +
        " intentos y el número aleatorio era " +
        eleccion
    );
    containerText.remove();
    $("#enviar").remove();
  }
}
