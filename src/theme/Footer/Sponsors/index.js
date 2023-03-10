import React from "react";

import generalProtocolsLogo from "@site/static/img/sponsors/GeneralProtocolsLogo.jpg";

const Sponsors = () => {
  return (
    <div class="text--center padding-horiz--md">
      <hr />
      <p class="footer__title">Check out our sponsor:</p>
      <a href="https://generalprotocols.com" target="_blank">
        <img
          src={generalProtocolsLogo}
          alt="General Protocols logo"
          height="100"
          width="100"
        />
        <h2>General Protocols</h2>
      </a>
      <p>
        Speculate or hedge your BCH at{" "}
        <a href="https://bchbull.com" target="_blank">
          bchbull.com
        </a>
      </p>
      <p class="footer__title">
        A massive thank you to our{" "}
        <a href="https://www.patreon.com/bitcoincashpodcast" target="_blank">
          Patrons
        </a>
        !
      </p>
      <h2>Ricky & HP</h2>
    </div>
  );
};

export default Sponsors;
