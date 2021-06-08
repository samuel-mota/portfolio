import styles from "../../styles/Tools.module.scss";
import Intro from "../Intro";

const Tools = () => {
  return (
    <div className={styles.tools}>
      <Intro title="tools" />
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

export default Tools;
