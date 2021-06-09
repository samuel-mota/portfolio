import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image"; // it doesnt work with svg

import styles from "../styles/Home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import DarkModeButton from "../components/DarkModeButton";
import { useDarkMode } from "../contexts/DarkModeContext";

import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Tools from "../components/Tools";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div className={styles.container}>
      <Head>
        <title>Samuel Mota DEV</title>
      </Head>

      <main className={styles.aboutContainer}>
        <DarkModeButton />

        <img
          src={`/assets/images/sam-logo-${darkMode ? "dark" : "light"}.svg`}
          alt="logo"
        />
        <div className={styles.hexagone}></div>
        {/* svg to make round corners in the hexagone */}
        <svg
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="round">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="7"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        <h1>
          About me{" "}
          <img
            src={`/assets/icons/spaceship-${darkMode ? "dark" : "light"}.svg`}
            alt=""
          />
        </h1>

        <p>
          Hello! My name is Samuel Mota, I am a self taught multilingual
          professional with wide experiences in positions from different areas.
        </p>
        <p>
          During about 4 years I’ve been working on personal projects in order
          to get more experience (using technologies such as HTML, CSS, JS,
          React, PHP, MySQL) before starting a Computer Science degree.
        </p>
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/samuel-mota/"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/samuel-mota"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://codepen.io/samuel-mota"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
          <a
            href="mailto:hello@samuelmota.dev?subject=Message from Portfolio website&body=Write your message :)"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </main>

      <aside className={styles.mainContainer}>
        <Portfolio />
        <Skills />
        <Tools />
      </aside>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// };
