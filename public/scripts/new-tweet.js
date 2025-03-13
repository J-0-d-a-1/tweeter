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
    }).catch((error) => {
      console.log(error);
      // if (data.content.text === "" || data.content.text === null) {
      //   alert("You need to write something!");
      // }
      // if (data.content.text.length > 140) {
      //   alert("Your tweet is too long!");
      // }
    });
  });
});
