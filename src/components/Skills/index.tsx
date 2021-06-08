import styles from "../../styles/Skills.module.scss";
import Intro from "../Intro";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <Intro title="skills" />
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img
            src="/assets/icons/skills-icons/js-icon.svg"
            alt="javascript icon"
          />
        </div>
        <div className={styles.icon}>
          <img
            src="/assets/icons/skills-icons/ts-icon.svg"
            alt="typescript icon"
          />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/skills-icons/css-icon.svg" alt="css icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/skills-icons/html-icon.svg" alt="html icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/skills-icons/react-icon.svg" alt="react icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/skills-icons/next-icon-light.svg" alt="next icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/skills-icons/sass-icon.svg" alt="sass icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/skills-icons/bootstrap-icon.svg" alt="bootstrap icon" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
