import React from 'react';
import youtubeLogo from "@site/static/img/socialMedia/youtube.png";
import twitterLogo from "@site/static/img/socialMedia/twitter.png";

export default function AnnouncementBarContent() {
  const styles = { height: 60, minHeight: 60, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'  }

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
    </div>
  </div>
}
