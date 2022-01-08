import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Soslea } from "./assets/solsea.svg";
import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter, faDiscord, faHome);

export const Nav = () => {
  return (
    <div className="nav">
    <div className="innav">
      <a href="/"><FontAwesomeIcon icon={faHome} className="nav-item"/></a>
      <a href="https://twitter.com/froogs_nft"><FontAwesomeIcon icon={faTwitter} className="nav-item"/></a>
      <Soslea height="20px" width="20px" className="nav-item"/>
    </div>
    </div>
  );
};
