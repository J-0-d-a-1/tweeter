$(document).ready(() => {
  // POST for /api/tweets
  $("section.new-tweet > form").on("submit", function (event) {
    event.preventDefault();

    // fetching data to server with ajax
    $.ajax({
      method: "POST",
      url: "/api/tweets",
      data: $(this).serialize(),
    }).catch((error) => {
      alert("You need to write something");
      // if (data.content.text === "" || data.content.text === null) {
      //   alert("You need to write something!");
      // }
      // if (data.content.text.length > 140) {
      //   alert("Your tweet is too long!");
      // }
    });
  });
});
