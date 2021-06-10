import { GetStaticProps } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

import { api } from "../services/api";
import DarkModeButton from "../components/DarkModeButton";
import { useDarkMode, useMenu } from "../contexts/AppContext";

import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import SocialIcons from "../components/SocialIcons";

interface PortfoliosProps {
  portfolios: [];
  languages: [];
}

export default function Home({ portfolios, languages }: PortfoliosProps) {
  const { darkMode } = useDarkMode();
  const { menuActive, changeMenuState } = useMenu();

  return (
    <div className={styles.container}>
      <Head>
        <title>Samuel Mota DEV</title>
      </Head>

      <main
        className={`${styles.mainContainer} ${
          menuActive && styles.mainContainerClosed
        }`}
      >
        <div className={styles.aboutContainer}>
          <DarkModeButton media="desktop" />

          <div className={styles.logoAndPhoto}>
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
          </div>

          <h1>
            About me
            <span>
              <img
                src={`/assets/icons/spaceship-${
                  darkMode ? "dark" : "light"
                }.svg`}
                alt=""
              />
            </span>
          </h1>

          <p>
            Hello! My name is Samuel Mota, I am a self taught multilingual
            professional with wide experiences in positions from different
            areas.
            <br />
            <br />
            During about 4 years I’ve been working on personal projects in order
            to get more experience (using technologies such as HTML, CSS, JS,
            React, PHP, MySQL) before starting a Computer Science degree.
          </p>

          <SocialIcons media="desktop" />
        </div>

        <button
          type="button"
          className={styles.menuOpenButton}
          onClick={changeMenuState}
        >
          <img
            src={`/assets/icons/menu-icons/menu-icon-open-${
              darkMode ? "dark" : "light"
            }.svg`}
            alt=""
          />
        </button>

        <nav className={styles.menu}>
          <DarkModeButton media="mobile" />

          <button
            type="button"
            className={styles.menuCloseButton}
            onClick={changeMenuState}
          >
            <img
              src={`/assets/icons/menu-icons/menu-icon-close-${
                darkMode ? "dark" : "light"
              }.svg`}
              alt=""
            />
          </button>

          <h2>Contact me</h2>
          <SocialIcons media="tablet" />
        </nav>
      </main>

      <div
        className={`${styles.bgToCloseMenu} ${
          menuActive && styles.bgToCloseMenuEnable
        }`}
        onClick={changeMenuState}
      ></div>

      <aside className={styles.asideContainer}>
        <Portfolio languages={languages} portfolios={portfolios} />
        <Skills />
        <Tools />
      </aside>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const portfolios = [
    {
      key: 0,
      repo: "portfolio",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://samuelmota.dev",
    },
    {
      key: 1,
      repo: "biblicamentes",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://sandboxsam.ml/",
    },
    {
      key: 2,
      repo: "moveit-project",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://moveit-project-samuel-mota.vercel.app/",
    },
    {
      key: 3,
      repo: "project-sds-vendas",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://project-vendas.netlify.app/",
    },
    {
      key: 4,
      repo: "imersao-react-next-alura",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://imersao-react-next-alura-psi.vercel.app/",
    },
  ];

  const languages = [];

  for (let i = 0; i < portfolios.length; i++) {
    const { data } = await api.get(`${portfolios[i].repo}/languages`);
    languages[i] = { ...data };
  }

  return {
    props: {
      portfolios,
      languages,
    }, // will be passed to the page component as props
  };
};
