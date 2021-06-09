//Función para hacer la primer letra mayus de un String
function capitalized(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class Oferta {
  constructor(nombre, dias, porcentaje) {
    this.nombre = nombre;
    this.dias = dias;
    this.porcentaje = parseFloat(porcentaje / 100);
  }
}

const comunidad = new Oferta("comunidad", ["Martes", "Miércoles"], "15");

function descuentoComunidad(usaComunidad, diaSemana, ticket) {
  if (usaComunidad === "S" && comunidad.dias.includes(diaSemana)) {
    total = ticket * (1 - comunidad.porcentaje);
    descuento = ticket * comunidad.porcentaje;
  }
}

let ejecutar = "S";

while (ejecutar === "S") {
  //inicializando variables locales
  const comunidad = prompt("Usa comunidad? S/N").toUpperCase();
  const dia = capitalized(prompt("Qué día es hoy?"));
  const monto = parseInt(prompt("De cuánto es tu ticket?"));

  //ejecutando función
  descuentoComunidad(comunidad, dia, monto);

  //comunicando resultado
  alert("El total a pagar es: " + total);
  alert("El descuento obtenido es: " + descuento);

  // actualizando ejecutar
  ejecutar = prompt("Querés estimar otro ticket? S/N").toUpperCase();
}
