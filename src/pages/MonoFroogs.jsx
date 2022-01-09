import { monofroogs } from "./constants.ts";
import { ReactComponent as Monopink } from "../assets/monofroog-pink-outline.svg";

import styles from "./styles.module.css";

export const MonoFroogs = () => {
  const froogs = monofroogs.map((item) => {
    return (
      <div className={styles.frame}>
        <a href={item.url}>
       <img src={item.img} className={styles.monofroogimg} alt={item.name} />
        <div className="b-neue">
            <i className={styles.heading}> {item.name} </i>
        </div>
      </a>
      </div>
    );
  });
  return (
    <div className={styles.monoheader}>
        <div className={styles.monoheaderandtitle}>
      <Monopink className={styles.pinkimg} />
      <div className={styles.title}>
      <div className="b-neue large"> Monofroogs </div></div>
        </div>
      <div className={styles.monofrooggrid}> {froogs}</div>
    </div>
  );
};
