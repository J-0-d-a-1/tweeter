$(document).ready(() => {
  $("#tweet-text").on("input", function () {
    let numberOfCharacter = $(this).val().length;
    const maxNumberOfCharacter = 140;

    let limitOfCharacter = maxNumberOfCharacter - numberOfCharacter;

    const counterElement = $(this).siblings().find(".counter");

    if (limitOfCharacter >= 0) {
      counterElement.val(limitOfCharacter);

      counterElement.css("color", "#000");
    } else {
      counterElement.val(limitOfCharacter);
      counterElement.css("color", "#f00");
    }
  });
});
