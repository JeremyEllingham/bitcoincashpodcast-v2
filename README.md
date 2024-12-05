# The Bitcoin Cash Podcast

Following Bitcoin Cash (BCH) on its rise to global reserve currency.

A podcast, rock band, information tool and documentation for the Bitcoin Cash community.

Hosted at https://www.bitcoincashpodcast.com

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
$ npm install
```

## Local Development

Note: Comment out the `gtag` & `googleAnalytics` variables in `docusaurus.config.js` first. Like this:

```
  gtag: {
    // You can also use your "G-" Measurement ID here.
    trackingID: "x", // For local dev purposes
    // trackingID: process.env.GOOGLE_ANALYTICS_ID,
    // Optional fields.
    anonymizeIP: true, // Should IPs be anonymized?
  },
  googleAnalytics: {
    trackingID: "x", // For local dev purposes
    // trackingID: process.env.GOOGLE_ANALYTICS_ID,
    // Optional fields.
    anonymizeIP: true, // Should IPs be anonymized?
  },
```

then:

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Extra notes

/bitcoin.pdf hosted in /static for general reference.

/sunglasses.jpg link hosted in /static for Zapit ad banner reference.