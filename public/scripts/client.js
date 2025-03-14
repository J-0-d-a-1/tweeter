/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet) => {
  let $tweet = `
    <div class="tweet">
      <header>
        <span><img src="${tweet.user.avatars}" />${tweet.user.name}</span
        ><span class="account">${tweet.user.handle}</span>
      </header>
      <article>${tweet.content.text}</article>
      <footer>
        <span>${timeago.format(tweet.created_at)}</span>
        <span class="icons">
          <i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i
          ><i class="fa-solid fa-heart"></i>
        </span>
      </footer>
    </div>
  `;

  return $tweet;
};

const renderTweets = (tweets) => {
  // $("#tweets-container").append(tweets.map(createTweetElement));
  for (const tweet of tweets) {
    $("#tweets-container").prepend(createTweetElement(tweet));
  }
};

const isTweetValid = (valueOfTextarea) => {
  if (valueOfTextarea.length > 140) {
    $(".exceeded-error-message").slideDown(1000);
    return false;
  }

  if (valueOfTextarea === null || valueOfTextarea === "") {
    $(".empty-error-message").slideDown(1000);
    return false;
  }

  return true;
};

const clearErrorMessage = () => {
  $(".exceeded-error-message").slideUp(1000);
  $(".empty-error-message").slideUp(1000);
};

$(document).ready(() => {
  // GET for /api/tweets
  const loadTweets = function () {
    $.ajax("/api/tweets", {
      method: "get",
      url: "/tweets",
    })
      .then((data) => {
        console.log($("#tweet-text").val());
        $("#tweet-text").val("");
        renderTweets(data);
      })
      .catch((error) => {
        console.log(error, "Failed fetching data: ");
      });
  };

  loadTweets();

  $("section.new-tweet > form").on("submit", function (event) {
    event.preventDefault();
    clearErrorMessage();

    const $text = $("#tweet-text").val();

    if (!isTweetValid($text)) {
      return;
    }

    $.ajax({
      method: "POST",
      url: "/api/tweets",
      data: $(this).serialize(),
    })
      .then(() => {
        loadTweets();
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
