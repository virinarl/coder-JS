const btn = document.querySelectorAll("button");
let player = 0;
let board = [];

const pulsedBtn = (e, index) => {
  player++;
  const btn = e.target;
  const color = player % 2 ? "pink" : "paleGreen";
  btn.style.backgroundColor = color;
  board[index] = color;
  checkWinner() ? console.log("ganaste") : console.log("Todavia no");
};

function checkWinner() {
  if (board[0] === board[1] && board[0] === board[2] && board[0]) {
    return true;
  } else if (board[3] === board[4] && board[3] === board[5] && board[3]) {
    return true;
  } else if (board[6] === board[7] && board[6] === board[8] && board[6]) {
    return true;
  } else if (board[0] === board[3] && board[0] === board[6] && board[0]) {
    return true;
  } else if (board[1] === board[4] && board[1] === board[7] && board[1]) {
    return true;
  } else if (board[2] === board[5] && board[2] === board[8] && board[2]) {
    return true;
  } else if (board[0] === board[4] && board[0] === board[8] && board[0]) {
    return true;
  } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
    return true;
  }
  return false;
}

btn.forEach((elmt, i) =>
  elmt.addEventListener("click", (e) => pulsedBtn(e, i), { once: true })
);
