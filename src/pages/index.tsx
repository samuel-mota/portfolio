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

interface PortfolioData {
  key: number;
  repo: string;
  picture: string;
  projectLink: string;
  tech: {};
}
interface PortfoliosProps {
  portfolios: PortfolioData[];
  languages: [];
}

export default function Home({ portfolios, languages }: PortfoliosProps) {
  const { darkMode } = useDarkMode();
  const { menuActive, changeMenuState } = useMenu();

  return (
    <div className={styles.container}>
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
            Hello! My name is <strong>Samuel</strong> and I am a self taught
            multilingual professional with wide experiences in positions from
            different areas. The reason I have decided to follow this path is
            simple: <strong>I love technology</strong>. I got my first PC when I
            was 9 years old, since then I am always connected to this world.
            <br />
            <br />
            About 4 years ago I definitely started my studies in this area.{" "}
            <strong>
              I know that knowledge doesn't stop, so I'm always learning
            </strong>
            . I did some personal projects in order to get more knowledge (using
            technologies like{" "}
            <strong>HTML, CSS, JS, ReactJS, PHP, MySQL</strong> and others)
            before starting a Computer Science college. I feel more confident in
            this field now and am looking forward to absorbing more knowledge
            and adding up all my distinct capabilities.
            <br />
            <br />
            <strong>
              <em>May the force be with you!</em>
            </strong>
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
      tech: { "React.JS": 0, "Next.JS": 0 },
    },
    {
      key: 1,
      repo: "biblicamentes",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://sandboxsam.ml/",
      tech: { MySQL: 0 },
    },
    {
      key: 2,
      repo: "moveit-project",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://moveit-project-samuel-mota.vercel.app/",
      tech: { "React.JS": 0, "Next.JS": 0 },
    },
    {
      key: 3,
      repo: "project-sds-vendas",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://project-vendas.netlify.app/",
      tech: { "Spring": 0 },
    },
    {
      key: 4,
      repo: "imersao-react-next-alura",
      picture: "/assets/images/samuel-mota.jpg",
      projectLink: "https://imersao-react-next-alura-psi.vercel.app/",
      tech: {},
    },
  ];

  const languages = [];

  portfolios[0].tech;

  try {
    for (let i = 0; i < portfolios.length; i++) {
      const { data } = await api.get(`${portfolios[i].repo}/languages`);
      languages[i] = { ...data, ...portfolios[i].tech };
    }
  } catch (error) {
    for (let i = 0; i < portfolios.length; i++) {
      languages[i] = { ...portfolios[i].tech };
    }
    console.log("ERROR:", error);
  }

  return {
    props: {
      portfolios,
      languages,
    }, // will be passed to the page component as props
    revalidate: 60 * 60, // call the api to update the data once an hour
  };
};
