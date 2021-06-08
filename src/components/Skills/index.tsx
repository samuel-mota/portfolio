import styles from "../../styles/Skills.module.scss";
import Intro from "../Intro";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <Intro title="skills" />
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/node-icon.svg" alt="node icon" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
