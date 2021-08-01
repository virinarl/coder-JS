class Connect4 {
  constructor(selector) {
    this.ROWS = 6;
    this.COLS = 7;
    this.selector = selector;
    this.player = "red";
    this.createBoard();
    this.setupEvents();
  }

  createBoard() {
    const $board = $(this.selector);
    for (let row = 0; row < this.ROWS; row++) {
      const $row = $("<div>").addClass("row");
      $board.append($row);
      for (let col = 0; col < this.COLS; col++) {
        const $col = $("<div>")
          .addClass("col empty")
          .attr("data-col", col)
          .attr("data-row", row);
        $row.append($col);
      }
    }
  }

  setupEvents() {
    const $board = $(this.selector);
    //aún necesito acceso a this como objeto
    const that = this;

    function findLastEmpty(col) {
      const cells = $(`.col[data-col='${col}']`);
      for (let i = cells.length - 1; i >= 0; i--) {
        const $cell = $(cells[i]);
        if ($cell.hasClass("empty")) {
          return $cell;
        }
      }
      return null;
    }

    $board.on("mouseenter", ".col.empty", function () {
      const col = $(this).data("col");
      const $lastEmpty = findLastEmpty(col);
      $lastEmpty.addClass(`preview_${that.player}`);
    });

    $board.on("mouseleave", ".col", function () {
      $(".col").removeClass(`preview_${that.player}`);
    });

    $board.on("click", ".col.empty", function () {
      const col = $(this).data("col");
      const row = $(this).data("row");
      const $lastEmpty = findLastEmpty(col);
      $lastEmpty.removeClass(`empty preview_${that.player}`);
      $lastEmpty.addClass(`${that.player}_coin`);
      const winner = that.checkWinner(row, col);
      if (winner) {
        //To something
        alert(`Game over!! Player ${that.player} won!`);
        return;
      }
      //Alternar entre jugadores
      that.player = that.player === "red" ? "black" : "red";
      $(this).trigger("mouseenter");
    });

    function checkWinner(row, col) {
      const that = this;

      function $getCell(x, y) {
        return $(`.col[data-row='${x}'][data-col='${y}']`);
      }

      function checkDirection(direction) {
        let total = 0;
        let x = row + direction.x;
        let y = col + direction.y;
        let $cell = $getCell(x, y);
        while (x >= 0 && x < that.ROWS && y >= 0 && y < that.COLS) {
          //Do something
        }
      }

      function checkWins(dirA, dirB) {
        const total = 1 + checkDirection(dirA) + checkDirection(dirB);
        if (total >= 4) {
          return that.player;
        } else {
          return null;
        }
      }

      function checkVertical() {
        return checkWins({ x: -1, y: 0 }, { x: 1, y: 0 });
      }

      return checkVertical();
    }
  }
}

$(document).ready(function () {
  const connect4 = new Connect4("#connect4Board");
});
