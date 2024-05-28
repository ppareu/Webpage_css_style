document.querySelector(".card").addEventListener("click", function () {
  this.classList.toggle("clicked");
  this.querySelector(".card-back").classList.toggle("clicked");
});

document
  .getElementById("introduce-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 막기
    const card = document.querySelector(".card");
    const cardBack = card.querySelector(".card-back");

    // 카드 앞면/뒷면 전환 클래스 토글
    card.classList.toggle("clicked");
    cardBack.classList.toggle("clicked");
  });
