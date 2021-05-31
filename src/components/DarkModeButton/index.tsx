import { useState } from 'react';
import styles from '../../styles/DarkModeButton.module.scss';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  function handleDarkModeChange() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  return (
    <button
      type="button"
      className={`${styles.container} ${
        darkMode ? styles.containerDarkMode : ""
      }`}
      onClick={handleDarkModeChange}
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
}

export default DarkModeButton;