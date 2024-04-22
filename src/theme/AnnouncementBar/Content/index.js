import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';
export default function AnnouncementBarContent(props) {
  const {announcementBar} = useThemeConfig();
  // const {content} = announcementBar;

  return <div style={{ height: 60, minHeight: 60, backgroundColor: 'red', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
    <h1>My content!!!</h1>
  </div>

  // return (
  //   <div
  //     {...props}
  //     className={clsx(styles.content, props.className)}
  //     // Developer provided the HTML, so assume it's safe.
  //     // eslint-disable-next-line react/no-danger
  //     dangerouslySetInnerHTML={{__html: content}}
  //   />
  // );
}
