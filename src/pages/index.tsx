import { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.scss";

import { api } from "../services/api";
import DarkModeButton from "../components/DarkModeButton";
import { useDarkMode, useMenu } from "../contexts/AppContext";
import useTranslation from "next-translate/useTranslation";

import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import SocialIcons from "../components/SocialIcons";
import LocalSwitch from "../components/LocalSwitch";

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

  const { t, lang } = useTranslation("common");

  // persist locale cookie
  const { locale, defaultLocale } = useRouter();
  //https://www.npmjs.com/package/next-translate
  useEffect(() => {
      const date = new Date();
      const expireMs = 100 * 24 * 60 * 60 * 1000; // 100 days
      date.setTime(date.getTime() + expireMs);
      document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()}`;
  }, [locale, defaultLocale]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Samuel Mota</title>
      </Head>

      <main
        className={`${styles.mainContainer} ${
          menuActive && styles.mainContainerClosed
        }`}
      >
        <div className={styles.aboutContainer}>
          <DarkModeButton media="desktop" />
          <LocalSwitch lang={lang} />

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
            {t("about_me")}
            <span>
              <img
                src={`/assets/icons/spaceship-${
                  darkMode ? "dark" : "light"
                }.svg`}
                alt=""
              />
            </span>
          </h1>

          <p dangerouslySetInnerHTML={{ __html: t("about_me_description") }} />

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
          <LocalSwitch lang={lang} media="mobile" />

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

          <h2>{t("contact_me")}</h2>
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
      tech: { Spring: 0 },
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
