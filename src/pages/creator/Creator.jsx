import { LinkPreview } from "@dhaiwat10/react-link-preview";
import {
  faDribbble,
  faLinkedin,
  faMediumM,
  faTwitter,
  faInstagram,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Solsea } from "../../assets/solsea.svg";
import styles from "./styles.module.css";
export const Creator = () => {
  return (
    <div className="App">
<SocialMedia/>
      <section className="secondary">
        <p className="r-mono large">
          Hey I'm Nivaaz, the creator of Froogs. 👋
        </p>
        <p className="r-mono small">
          I'm an electrical engineer turned self-taught software engineer.
        </p>
      </section>
      <section>
        <h2 className="b-neue medium"> What do you do tho </h2>
        <p className="r-mono small">
          I'm currently working as a growth engineer at a startup
          <a href="eucalyptus.vc" target="_blank">
            eucalyptus.vc
          </a>
          in Australia. 💉👩🏻‍💻
        </p>
        <div className="dual-cards">
          <p className="r-mono small">
            A couple indstries I worked in are:
            <ul>
              <li> Crypto 🪙</li>
              <li> Trading </li>
              <li> Telehealth </li>
              <li> Design-tech </li>
              <li> Engineering Consulting </li>
              <li> Education & Education-tech </li>
            </ul>
          </p>
          <p className="r-mono small">
            Some cool places I have worked are:
            <ul>
              <li> Canva </li>
              <li> Aurecon </li>
              <li> Art of Smart </li>
              <li> Vivcourt Trading </li>
            </ul>
          </p>
        </div>
        <h2 className="b-neue medium">
          What inspired you to get into design?
        </h2>
        <p className="r-mono small">
          I've always had a creative knack and I'm pretty much always designing
          on Figma, Canva or Vectary in my spare time.
        </p>
        <p className="r-mono small">
          You just know there is a 3D collection on it's way.
        </p>
        <a className="r-mono" target="_blank" href="https://solsea.io/nft/F5FdJE8GkvYAeeirVjoUsVeHTiJGGbMqjZJG35YEM2nU"> View 3D NFT on Solsea </a>
      </section>
      <section>
        <h2 className="b-neue medium">
          I see a medium link below, what will I find there?
        </h2>
        <p className="r-mono small">
          I'm also super passionate about sharing back everything I have learnt
          from coding to design.
        </p>
        <p className="r-mono small">
          I'm pretty sure we'll see some NFT collection blogs soon.
        </p>
        <p className="r-mono small">
          Be sure to follow me on Medium so you don't miss it!
        </p>
        <button> Subscribe on Medium </button>
      </section>
      <section>
      <h2 className="b-neue medium"> Made anything related to NFTs yet? </h2>
      <p className="r-mono small">
        To help all those Solsea NFT collection creators, I created a template
        for marketing materials you need to upload on Figma.
      </p>
      <LinkPreview url="https://www.figma.com/community/file/1061818933860166454" />
      </section>
<SocialMedia/>
    </div>
  );
};


const SocialMedia = () =>{
    return (
        <section className={styles.socialContainer}>
        <a
          rel="noreferrer"
          href="https://twitter.com/nivaaz_nft"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.figma.com/@nivaaz"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFigma} size="2x" />
        </a>
        <a
          rel="noreferrer"
          href="https://au.linkedin.com/in/nivaaz"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          rel="noreferrer"
          href="https://dribbble.com/nivaaaaaz"
          target="_blank"
        >
          <FontAwesomeIcon icon={faDribbble} size="2x" />
        </a>
        <a rel="noreferrer" href="https://medium.com/@nivaaz" target="_blank">
          <FontAwesomeIcon icon={faMediumM} size="2x" />
        </a>
        <a rel="noreferrer" href="https://instagram.com/nivaaaaaz" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          rel="noreferrer"
          href="https://solsea.io/creator/61d10049989845854b69c14a/nfts"
          target="_blank"
        >
          <Solsea />
        </a>
      </section>

    )
}