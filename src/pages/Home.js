import { ReactComponent as HeaderImage } from "../assets/header.svg";
import { ReactComponent as Butterfly } from "../assets/crystalButterfly.svg";
import { ReactComponent as Duofroogs } from "../assets/duofroogs.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

export const Home=()=> {
  return (
    <>
      <HeaderImage className="header" />
      <div className="App">
        <section className="primary">
          <p className="r-mono large">We're creating our</p>
          <p className="r-mono large">
            <i>first ever</i>
          </p>
          <p className="r-mono large">
            <u> NFT collection</u>.
          </p>
          <p className="r-mono small">
            and it feature cute little blobs that we call froogs.
          </p>
          <div className="cta">
           <Link to="/mono-froogs"> <button>Show me the collection ➜ </button></Link>
          </div>
        </section>

        <section>
          <h1 className="large b-neue"> Froogs 🤍</h1>
        </section>

        <section className="tertiary r-mono small">
          Each froog has it’s own story that we’ll never tell.
        </section>
        <section className="dual-cards">
          <section className="r-mono small">
            Our first collection will release January 2021.{" "}
          </section>
          <section className="tertiary r-mono small">
            It will contain 7 unique froogs, all in monochrome.
          </section>
        </section>

        <section className="secondary r-mono">
          <div className="dual-cards">
            {" "}
            <div>
              We’ll be releasing on solsea, because nobody wants to be paying
              high gas fees. 🌊
            </div>
            <Butterfly className="big-butterfly"/>
          </div>
        </section>

        <section>
          <div className="b-neue large"> Roadmap 🧭</div>
          <div className="r-mono small"> 1. Monofroogs </div>
          <div className="r-mono small"> 2. Full colour Froogs </div>
          <div className="r-mono small"> 3. Crystal fly </div>
          <div className="r-mono small"> 4. Mega crystal fly collection </div>
        </section>
        <section>
          <div className="r-mono">
            We’re also brainstorming out the froogs and their friends might
            battle it out in the pond, so stay tunned!
          </div>
        </section>
        <section className="r-mono cta">
         <a rel="noreferrer" href="https://twitter.com/froogs_nft"> 
         <button>
           Keep up to date with us on <FontAwesomeIcon icon={faTwitter}/>  ➜
           </button>
          </a>
        </section>
        <section>
          <a rel="noreferrer" href="/creators"><div className="b-neue large"> the creator👋 </div></a>
          <p className="r-mono small">
            The creator of this collection is a growth engineer from Australia.
            She’s always loved design, crypto and tech and is hoping to mix her
            two loves together.
          </p>
          <p className="r-mono small">
            Check out Nivaaz’s website to learn more about her. Alternatively
            learn to code, design or just browse some art of hers.{" "}
          </p>
          <div className="cta">
          <a rel="noreferrer" href="/creators"><button> Find out more about Nivaaz ➜</button></a>
          </div>
        </section>

     
        
        <section className="secondary">
          <p className="b-neue medium"> Now you know all about the collection, check it out on Solsea. </p>
         <LinkPreview url="https://solsea.io/collection/61d151b05725cb14470a95e1"/>
        </section>
      </div>
      <Duofroogs className="footerHome"/>
    </>
  );
}


