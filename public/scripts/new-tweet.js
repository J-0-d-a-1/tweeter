$(document).ready(() => {
  // POST for /api/tweets
  $("section.new-tweet > form").on("submit", function (event) {
    event.preventDefault();

    // fetching data to server with ajax
    $.ajax({
      method: "POST",
      url: "/api/tweets",
      data: { text: `${this}.serialize()` },
      success: (data) => {
        console.log(data);
      },
    });
  });
});
