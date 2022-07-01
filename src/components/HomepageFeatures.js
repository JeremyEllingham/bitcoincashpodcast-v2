import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Podcast",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The Bitcoin Cash Podcast combines the latest cryptocurrency and Bitcoin
        Cash news with deep dives on BCH topics, featuring a variety of guests
        from the BCH community.
      </>
    ),
  },
  {
    title: "Music",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Rock out and spread the Bitcoin Cash revolutionary spirit.</>
    ),
  },
  {
    title: "Knowledge Hub",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Discover high quality recommended resources, or contribute to the
        knowledge base by submitting code updates.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
