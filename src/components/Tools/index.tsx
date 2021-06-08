import styles from "../../styles/Tools.module.scss";
import Intro from "../Intro";

const Tools = () => {
  return (
    <div className={styles.tools}>
      <Intro title="tools" />
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img
            src="/assets/icons/tools-icons/atlassian-icon.svg"
            alt="atlassian icon"
          />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/tools-icons/heroku-icon-light.svg" alt="heroku icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/tools-icons/jira-icon.svg" alt="jira icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/tools-icons/netlify-icon.svg" alt="netlify icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/tools-icons/ps-icon-light.svg" alt="ps icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/tools-icons/trello-icon.svg" alt="trello icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/tools-icons/vercel-icon-light.svg" alt="vercel icon" />
        </div>
        <div className={styles.icon}>
          <img src="/assets/icons/tools-icons/vscode-icon.svg" alt="vscode icon" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
