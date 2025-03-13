/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
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
    $("#tweets-container").append(tweets.map(createTweetElement));
    // for (const tweet of tweets) {
    //   $("#tweets-container").append(createTweetElement(tweet));
    // }
  };

  // const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like

  // renderTweets(data);
  // $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  // GET for /api/tweets
  const loadTweetws = function () {
    const $button = $("div button");
    $button.on("click", function () {
      $.ajax("/api/tweets", {
        method: "get",
        url: "/tweets",
      }).then((data) => renderTweets(data));
    });
  };

  loadTweetws();
});
