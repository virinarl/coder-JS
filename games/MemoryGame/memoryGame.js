document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cards = [
    {
      name: "coffee",
      img: "img/coffee.jpg",
    },
    {
      name: "coffee",
      img: "img/coffee.jpg",
    },
    {
      name: "bread",
      img: "img/bread.jpg",
    },
    {
      name: "bread",
      img: "img/bread.jpg",
    },
    {
      name: "cake",
      img: "img/cake.jpg",
    },
    {
      name: "cake",
      img: "img/cake.jpg",
    },
    {
      name: "cookie",
      img: "img/cookie.jpg",
    },
    {
      name: "cookie",
      img: "img/cookie.jpg",
    },
    {
      name: "donut",
      img: "img/donut.jpg",
    },
    {
      name: "donut",
      img: "img/donut.jpg",
    },
    {
      name: "hotChocolate",
      img: "img/hotChocolate.jpg",
    },
    {
      name: "hotChocolate",
      img: "img/hotChocolate.jpg",
    },
  ];

  cards.sort(() => 0.5 - Math.random());

  const board = document.querySelector(".gameBoard");
  const displayResults = document.querySelector("#results");
  let cardChosen = [];
  let cardChosenId = [];
  let cardsWon = [];
  let score = 0;

  //board
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
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

    if (cardsWon.length === cards.length / 2) {
      displayResults.textContent =
        "Congratulations! You won in " + score + " tries";
    }
  }

  //flip your card
  function flipCard() {
    let cardCheck = this.getAttribute("src");
    console.log(cardCheck);
    if (cardCheck === "img/whiteBackground.jpg") {
      alert("Click Again");
    } else {
      let cardId = this.getAttribute("data-id");
      cardChosen.push(cards[cardId].name);
      cardChosenId.push(cardId);
      this.setAttribute("src", cards[cardId].img);
      if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500);
        score++;
      }
    }
  }
  createBoard();
});
