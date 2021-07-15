$(document).ready(() => {
  //card options
  const cards = "./memoryCardsdb.json";
  const board = document.querySelector(".gameBoard");
  const displayResults = document.querySelector("#results");
  let cardChosen = [];
  let cardChosenId = [];
  let cardsWon = [];
  let score = 0;
  let newData = [];

  $(".container").append('<button id="btn1">Start Game!</button>');
  $("#btn1").click(() => {
    $.getJSON(cards, function (data, status) {
      $("#btn1").remove();

      for (let i = 0; i < data.length; i++) {
        newData.push(data[i]);
        newData.push(data[i]);
      }
      newData.sort(() => 0.5 - Math.random());
      //board
      function createBoard() {
        for (let i = 0; i < newData.length; i++) {
          let card = document.createElement("img");
          card.setAttribute("src", "img/cardBackground.jpg");
          card.setAttribute("data-id", i);
          card.setAttribute("class", "card");
          card.addEventListener("click", flipCard);
          board.appendChild(card);
        }
      }

      //matches

      function checkForMatch() {
        let allCards = document.querySelectorAll("img");
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1] && optionOneId != optionTwoId) {
          alert("You found a Match!");
          allCards[optionOneId].setAttribute("src", "img/whiteBackground.jpg");
          allCards[optionTwoId].setAttribute("src", "img/whiteBackground.jpg");
          cardsWon.push(cardChosen);
        } else {
          allCards[optionOneId].setAttribute("src", "img/cardBackground.jpg");
          allCards[optionTwoId].setAttribute("src", "img/cardBackground.jpg");
          alert("sorry, try again");
        }
        cardChosen = [];
        cardChosenId = [];

        if (cardsWon.length === data.length) {
          displayResults.textContent =
            "Congratulations! You won in " + score + " tries";
        }
      }

      //flip your card
      function flipCard() {
        let cardCheck = this.getAttribute("src");
        if (cardCheck === "img/whiteBackground.jpg") {
          alert("Click Again");
        } else {
          let cardId = this.getAttribute("data-id");
          cardChosen.push(newData[cardId].name);
          cardChosenId.push(cardId);
          this.setAttribute("src", newData[cardId].img);
          if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
            score++;
          }
        }
      }
      createBoard();
    });
  });
});
