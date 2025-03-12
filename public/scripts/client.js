/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const createTweetElement = (tweet) => {
  let $tweet = `
    <div class="tweet">
          <header>
            <span><img src="${tweet.user.avatars}" />${tweet.user.name}</span
            ><span class="account">${tweet.user.handle}</span>
          </header>
          <article>${tweet.content.text}</article>
          <footer>
            <span>${tweet.created_at}</span>
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
$(document).ready(() => {
  renderTweets(data);
  // $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
