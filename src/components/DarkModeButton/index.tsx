import { useDarkMode } from "../../contexts/AppContext";

import styles from "../../styles/DarkModeButton.module.scss";

interface DarkModeButtonProps {
  media: string;
}

const DarkModeButton = ({media = "desktop"}: DarkModeButtonProps) => {
  const { darkMode, changeDarkModeState } = useDarkMode();

  return (
    <button
      type="button"
      className={`${styles.container} ${darkMode && styles.containerDarkMode} ${
        media === "mobile" ? styles.containerMobile : styles.containerDesktop
      }`}
      onClick={changeDarkModeState}
    >
      <img
        className={styles.icons}
        src={`/assets/icons/light-button-${
          darkMode ? "disabled" : "enabled"
        }.svg`}
        alt=""
      />
      <img
        className={styles.icons}
        src={`/assets/icons/dark-button-${
          darkMode ? "enabled" : "disabled"
        }.svg`}
        alt=""
      />
    </button>
  );
};

export default DarkModeButton;
