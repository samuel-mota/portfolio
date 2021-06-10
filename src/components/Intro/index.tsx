import { useDarkMode } from "../../contexts/AppContext";
import styles from "../../styles/Intro.module.scss";

interface IntroProps {
  title: string;
}

const Intro = ({ title }: IntroProps) => {
  const { darkMode } = useDarkMode();

  return (
    <div className={styles.shadow}>
      <div
        className={`${styles.introContainer} ${styles[title]}`}
        style={{
          backgroundImage: `url("./assets/icons/${title}-bg-${
            darkMode ? "dark" : "light"
          }.svg")`,
          
        }}
      >
        <img
          src={`./assets/icons/${title}-icon-${
            darkMode ? "dark" : "light"}.svg`}
          alt={`${title} icon`}
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Intro;
