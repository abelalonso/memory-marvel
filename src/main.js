var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  $(".back").on("click", function() {
    this.className = "front";
    this.parentNode.lastChild.className = "back";
    memoryGame.pickedCards.push(this.parentNode.id);
    $(this).addClass("on");
    $(this.parentNode.lastChild).addClass("on");
    if (memoryGame.pickedCards.length == 2) {
      $(".back").css({
        "pointer-events": "none"
      });
      if (
        memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        )
      ) {
        $(".back").css({ "pointer-events": "all" });
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        memoryGame.pickedCards = [];
        $(".on").removeClass("on");
        if (memoryGame.finished()) {
          alert("You have win on " + memoryGame.pairsClicked + " tries");
          location.reload();
        }
      } else {
        var that = this;
        setTimeout(function() {
          $(".on").toggleClass("back");
          $(".on").toggleClass("front");
          $(".on").removeClass("on");
          $(".back").css({ "pointer-events": "all" });
          memoryGame.pickedCards = [];
        }, 1000);
      }
      $("#pairs_clicked").text(memoryGame.pairsClicked);
    }
  });
});

function reverseCards() {}