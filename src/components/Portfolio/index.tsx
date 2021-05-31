import Intro from "../Intro";
import styles from "../../styles/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Intro title="portfolio" icon="darth vader" />
      <div>portfolio</div>
    </div>
  );
};

export default Portfolio;
