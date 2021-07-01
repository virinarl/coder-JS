let startButton = document.getElementById("start");
startButton.addEventListener("click", startGame, false);

//creamos el tablero
function board(size) {
  let tablero = "<div>\n";

  for (let row = 0; row < size; row++) {
    tablero += '<div class="boardRow"> \n';
    for (let col = 0; col < size; col++) {
      tablero +=
        '<div class="boardSection" id=' + row + "-" + col + "></div>\n";
    }
    tablero += "</div>\n";
  }
  return tablero + "</div>";
}

//Empezamos a jugar
function startGame() {
  const userName = document.getElementById("name").value;

  const dificulty = document.getElementById("dificulty").value;
  const initialWin = document.getElementById("initialState");
  let size = 0;

  initialWin.parentNode.removeChild(initialWin);
  //Verificamos la dificultad seleccionada para crear el tablero
  if (dificulty == "easy") {
    size = 5;
  } else if (dificulty == "medium") {
    size = 7;
  } else {
    size = 10;
  }

  //Generamos el tablero
  let gameBoard = board(size);
  document.body.innerHTML = gameBoard;

  let newElement = document.createElement("div");
  newElement.classList.add("form-row");
  newElement.classList.add("col");
  newElement.setAttribute("id", "selectColumn");
  document.body.appendChild(newElement);

  let play = document.getElementById("selectColumn");

  let newElementLabel = document.createElement("label");
  newElementLabel.setAttribute("for", "answer");
  newElementLabel.innerHTML = "Juega primero " + userName;
  play.appendChild(newElementLabel);

  let newElementValue = document.createElement("input");
  newElementValue.setAttribute("type", "text");
  newElementValue.setAttribute("name", "answer");
  newElementValue.classList.add("form-control");
  play.appendChild(newElementValue);

  const prueba = document.getElementById("4-3");
  prueba.classList.add("player1");
  console.log(prueba.classList[1]);

  //Estoy trabajando en cómo almacenar los resultados para luego mostrar un score
  // let resultados = { Nombre: userName, movimientos: moves };
  // games.push(resultados);
  // let gameResults = JSON.stringify(games);
  // sessionStorage.setItem("test1", gameResults);
}
