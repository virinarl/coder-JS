const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

class Oferta {
  constructor(nombre, dias, porcentaje) {
    this.nombre = nombre;
    this.dias = dias;
    this.porcentaje = parseFloat(porcentaje / 100);
  }
}
//Ofertas de distintos lugares
const comunidad = new Oferta("comunidad", ["Martes", "Miércoles"], "15");
const superFinDeSemana70 = new Oferta(
  "Super Fin de Semana",
  ["Sábado", "Domingo"],
  "70"
);

//Cuando agregue más descuentos, esta función va a tener un Switch para elegir entre los distintos caminos a elegir de acuerdo al descuento
function descuentoComunidad(usaComunidad, diaSemana, ticket) {
  if (usaComunidad === "S" && comunidad.dias.includes(diaSemana)) {
    total = ticket * (1 - comunidad.porcentaje);
    descuento = ticket * comunidad.porcentaje;
  } else {
    total = ticket;
    descuento = 0;
  }
}

function getTodayName() {
  let fecha = new Date();
  let getWeekDay = fecha.getDay();

  return getWeekDay;
}

let ejecutar = "S";

while (ejecutar === "S") {
  const comunidad = prompt("Usa comunidad? S/N").toUpperCase();
  const monto = parseInt(prompt("De cuánto es tu ticket?"));

  //Obtengo el día de la semana
  const dia = diasSemana[getTodayName()];

  descuentoComunidad(comunidad, dia, monto);

  //comunicando resultado
  alert("El total a pagar es: $" + total);
  alert("El descuento obtenido es: $" + descuento);

  // actualizando ejecutar
  ejecutar = prompt("Querés estimar otro ticket? S/N").toUpperCase();
}
