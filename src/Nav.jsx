import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faDribbble, faLinkedin, faMediumM, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Soslea } from "./assets/solsea.svg";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter, faDiscord, faHome, faLinkedin, faDribbble, faMediumM, faInstagram, faUser);

export const Nav = () => {
  return (
    <div className="nav">
    <div className="innav">
      <a rel="noreferrer" href="/">
        <FontAwesomeIcon icon={faHome} className="nav-item"/>
        </a>
      <a rel="noreferrer" href="https://twitter.com/froogs_nft" target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="nav-item"/>
        </a>
        <a rel="noreferrer" href="/creators" target="_blank">
        <FontAwesomeIcon icon={faUser} className="nav-item"/>
        </a>
      <a rel="noreferrer" href="https://solsea.io/collection/61d151b05725cb14470a95e1" target="_blank">
        <Soslea height="20px" width="20px" className="nav-item"/>
        </a>
    </div>
    </div>
  );
};
