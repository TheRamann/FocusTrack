// src/social-share.js
import open from 'open'; // Ensure you have this package installed

export const shareOnTwitter = (message) => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  open(tweetUrl);
};

export const shareOnInstagram = (message) => {
  // Instagram doesn't provide a direct share URL, so we'll open the upload page
  const uploadUrl = `https://www.instagram.com/create/story/`;
  open(uploadUrl);
};

export const shareOnReddit = (message) => {
  const redditUrl = `https://www.reddit.com/submit?title=${encodeURIComponent(message)}`;
  open(redditUrl);
};
