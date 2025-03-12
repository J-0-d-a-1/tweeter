$(document).ready(() => {
  $("#tweet-text").on("input", function () {
    let numberOfCharacter = $(this).val().length;
    const maxNumberOfCharacter = 140;

    let limitOfCharacter = maxNumberOfCharacter - numberOfCharacter;

    const counterElement = $(this).siblings().find(".counter");

    if (limitOfCharacter >= 0) {
      counterElement.val(limitOfCharacter);
      counterElement.addClass("blackText");
      counterElement.removeClass("redText");
    } else {
      counterElement.val(limitOfCharacter);
      counterElement.addClass("redText");
      counterElement.removeClass("blackText");
    }
  });
});
