import styles from "../../styles/Intro.module.scss";

interface IntroProps {
  title: string;
}

const Intro = ({ title }: IntroProps) => {
  const stylesLight = {
    portfolio: styles.portfolioLight,
    skills: styles.skillsLight,
    tools: styles.toolsLight,
  };

  const stylesDark = {
    portfolio: styles.portfolioDark,
    skills: styles.skillsDark,
    tools: styles.toolsDark,
  };

  return (
    <div className={styles.shadow}>
      <div
        className={`${styles.introContainer} ${stylesLight[title]}`}
        style={{
          backgroundImage: `url("./assets/icons/${title}-bg-light.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100px",
        }}
      >
        <img
          src={`./assets/icons/${title}-icon-light.svg`}
          alt={`${title} icon`}
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Intro;
