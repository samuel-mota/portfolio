import { useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

import styles from "../../styles/DarkModeButton.module.scss";

const DarkModeButton = () => {
  const { darkMode, changeDarkModeState } = useDarkMode();

  return (
    <button
      type="button"
      className={`${styles.container} ${
        darkMode ? styles.containerDarkMode : ""
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
