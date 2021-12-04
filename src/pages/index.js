import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import ReactPlayer from "react-player/youtube";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <ReactPlayer
          style={{
            paddingTop: 10,
            paddingBottom: 40,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          url={"https://www.youtube.com/watch?v=yM4gNVme5a0"}
          target="_blank"
        />
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/about">
            About This Project
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageHeader2() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ backgroundColor: "white" }}
    >
      <div className="container" style={{ backgroundColor: "white" }}>
        <h1 className="hero__title" style={{ color: "#84cb55" }}>
          Money has changed
        </h1>
        <p className="hero__subtitle" style={{ color: "black" }}>
          A peaceful, voluntary revolution in finance
        </p>
        <ReactPlayer
          style={{
            paddingTop: 10,
            paddingBottom: 40,
            width: "100%",
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          url={"https://www.youtube.com/watch?v=qxsRnsDzz4A"}
          target="_blank"
        />
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/music">
            Listen To More
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageHeader3() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Bitcoin Cash is Bitcoin</h1>
        <p className="hero__subtitle">The vision of Satoshi Nakamoto</p>
        <ReactPlayer
          style={{
            paddingTop: 10,
            paddingBottom: 40,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          url={"https://www.youtube.com/watch?v=EhRUqZt3-Yc"}
          target="_blank"
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome"
          >
            Listen To More
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageHeader4() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <h1 className="hero__title" style={{ color: "#84cb55" }}>
          Putting the currency back in cryptocurrency
        </h1>
        <p className="hero__subtitle" style={{ color: "black" }}>
          A proactive peer-to-peer economy
        </p>
        <ReactPlayer
          style={{
            paddingTop: 10,
            paddingBottom: 40,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          url={"https://www.youtube.com/watch?v=fF5iS8ghp44"}
          target="_blank"
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome"
          >
            Listen To More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Following Bitcoin Cash (BCH) on its rise to global reserve currency."
    >
      <HomepageHeader />
      <HomepageHeader2 />
      <HomepageHeader3 />
      <HomepageHeader4 />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
