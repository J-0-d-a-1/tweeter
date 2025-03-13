const createTweetElement = require("../scripts/client");

const isTweetValid = (valueOfTextarea) => {
  if (valueOfTextarea.length > 140) {
    alert("Your tweet is too long");
    return false;
  }

  if (valueOfTextarea === null || valueOfTextarea === "") {
    alert("You need to write something");
    return false;
  }

  return true;
};

$(document).ready(() => {
  // POST for /api/tweets
  $("section.new-tweet > form").on("submit", function (event) {
    event.preventDefault();

    const $text = $("#tweet-text").val();

    if (!isTweetValid($text)) {
      return;
    }

    // fetching data to server with ajax
    $.ajax({
      method: "POST",
      url: "/api/tweets",
      data: $(this).serialize(),
    })
      .then((data) => {
        const text = data.content.text;
        cleateTweetElement(text);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
