function descuentoComunidad(usaComunidad, diaSemana, ticket) {
  if (
    usaComunidad === "S" &&
    (diaSemana === "Martes" || diaSemana === "Miércoles")
  ) {
    total = ticket * 0.85;
    descuento = ticket * 0.15;
  }
}

let ejecutar = "S";

while (ejecutar === "S") {
  //inicializando variables locales
  const comunidad = prompt("Usa comunidad? S/N");
  const dia = prompt("Qué día es hoy?");
  const monto = parseInt(prompt("De cuánto es tu ticket?"));

  //ejecutando función
  descuentoComunidad(comunidad, dia, monto);

  //comunicando resultado
  alert("El total a pagar es: " + total);
  alert("El descuento obtenido es: " + descuento);

  // actualizando ejecutar
  ejecutar = prompt("Querés estimar otro ticket? S/N");
}
