$(document).ready(function() {
  //fisher yates shuffling algorithm
  Array.prototype.shuffle = function() {
    let i = this.length,
      j,
      tmp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = this[j];
      this[j] = this[i];
      this[i] = tmp;
    }
    return this;
  };
  function loadSrc(src) {
    $("#grid").append(`
    <div class="card">
      <img class="back" src="./images/mona-lisa.jpg" alt="back" />
      <img class="front" src=${src} alt="front" />
    </div>
   `);
  }
  function loadImgs(srcs) {
    let shuffled = srcs.shuffle();
    shuffled.forEach(function(src) {
      loadSrc(src);
    });
  }
  let srcs = [
    "./images/unicef.png",
    "./images/acf.png",
    "./images/alima.jpg",
    "./images/intersos.png",
    "./images/who.jpg",
    "./images/merry.png",
    "./images/icrc.png",
    "./images/wfp.jpg",
    "./images/unicef.png",
    "./images/acf.png",
    "./images/alima.jpg",
    "./images/intersos.png",
    "./images/who.jpg",
    "./images/merry.png",
    "./images/icrc.png",
    "./images/wfp.jpg"
  ];
  loadImgs(srcs);
  $(".progress__restart").on("click", function() {
    location.reload();
  });

  let $isFirst = false;
  let $firstCard, $secondCard;
  $(".card").click(function() {
    $(this).addClass("flip");

    if ($isFirst) {
      $secondCard = $(this);
      let $isSimilar =
        $(".front", $firstCard).attr("src") ===
        $(".front", $secondCard).attr("src");
      if ($isSimilar) {
        $firstCard = null;
        $secondCard = null;
      } else {
        setTimeout(function() {
          $firstCard.removeClass("flip");
          $secondCard.removeClass("flip");
        }, 1300);
      }
      $isFirst = !$isFirst;
    } else {
      $firstCard = $(this);
      $secondCard = null;
      $isFirst = !$isFirst;
    }
  });
});
