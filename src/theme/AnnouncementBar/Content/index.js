import React from 'react';
import youtubeLogo from "@site/static/img/socialMedia/youtube.png";
import twitterLogo from "@site/static/img/socialMedia/twitter.png";
import telegramLogo from "@site/static/img/socialMedia/telegram.png";
import instagramLogo from "@site/static/img/socialMedia/instagram.png";
import redditLogo from "@site/static/img/socialMedia/reddit.png";
import spotifyLogo from "@site/static/img/socialMedia/spotify.png";
import twitchLogo from "@site/static/img/socialMedia/twitch.png";
import tiktokLogo from "@site/static/img/socialMedia/tiktok.png";
import applePodcastsLogo from "@site/static/img/socialMedia/applePodcasts.png";
import googlePodcastsLogo from "@site/static/img/socialMedia/googlePodcasts.png";
import rssLogo from "@site/static/img/socialMedia/rss.png";

export default function AnnouncementBarContent() {
  const styles = { height: 60, minHeight: 60, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }

  const spanStyle = { paddingLeft: 5, paddingRight: 5 }

  return <div style={styles}>
    <div>
      <span style={spanStyle}>
        <a href="https://www.youtube.com/channel/UCsrDsJnHFnkMnJhEslofyPQ" target="_blank">
          <img src={youtubeLogo} height={40} width={40} alt="Youtube link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://twitter.com/TheBCHPodcast" target="_blank">
          <img src={twitterLogo} height={40} width={40} alt="Twitter link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://t.me/thebitcoincashpodcast_discussion" target="_blank">
          <img src={telegramLogo} height={40} width={40} alt="Telegram link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://www.twitch.tv/thebitcoincashpodcast" target="_blank">
          <img src={twitchLogo} height={40} width={40} alt="Twitch link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://www.instagram.com/thebchpodcast/" target="_blank">
          <img src={instagramLogo} height={40} width={40} alt="Instagram link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://www.tiktok.com/@thebchpodcast" target="_blank">
          <img src={tiktokLogo} height={40} width={40} alt="TikTok link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://www.reddit.com/r/BitcoinCashPodcast/" target="_blank">
          <img src={redditLogo} height={40} width={40} alt="Reddit link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://open.spotify.com/show/01N17Oi7sRZM4vYGiTO6uk" target="_blank">
          <img src={spotifyLogo} height={40} width={40} alt="Spotify link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://podcasts.apple.com/gb/podcast/the-bitcoin-cash-podcast/id1555355070" target="_blank">
          <img src={applePodcastsLogo} height={40} width={40} alt="Apple Podcasts link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL2JpdGNvaW5jYXNocG9kY2FzdC9mZWVkLnhtbA" target="_blank">
          <img src={googlePodcastsLogo} height={40} width={40} alt="Google Podcasts link" />
        </a>
      </span>
      <span style={spanStyle}>
        <a href="https://rss.com/podcasts/bitcoincashpodcast/" target="_blank">
          <img src={rssLogo} height={40} width={40} alt="RSS link" />
        </a>
      </span>

    </div>
  </div >
}
