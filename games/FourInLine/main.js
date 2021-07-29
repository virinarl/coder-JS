class Connect4 {
  constructor(selector) {
    this.ROWS = 6;
    this.COLS = 7;
    this.selector = selector;
    this.createBoard();
  }

  createBoard() {
    const $board = $(this.selector);
    for (let row = 0; row < this.ROWS; row++) {
      const $row = $("<div>").addClass("row");
      $board.append($row);
      for (let col = 0; col < this.COLS; col++) {
        const $col = $("<div>").addClass("col empty");
        $row.append($col);
      }
    }
  }
}

$(document).ready(function () {
  const connect4 = new Connect4("#connect4Board");
});
