import Head from "next/head";
import Link from "next/link";

import Intro from "../components/Intro";
import { useDarkMode } from "../contexts/AppContext";
import useTranslation from "next-translate/useTranslation";

import styles404 from "../styles/Error404.module.scss";

const Error404 = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation("common");

  return (
    <div className={styles404.container}>
      <Head>
        <title>Error 404 | Samuel Mota</title>
      </Head>

      <main className={styles404.mainContainer}>
        <Intro title="error404" />
      </main>

      <aside className={styles404.asideContainer}>
        <img
          src={`/assets/images/error404-${darkMode ? "dark" : "light"}.svg`}
          alt="error 404"
        />

        <h1>{t("error404_title")}</h1>

        <p>
          {`${t("error404_description")} `}
          <Link href="/">
            <a className={styles404.link}>{t("error404_link")}</a>
          </Link>
          .
        </p>
      </aside>
    </div>
  );
};

export default Error404;
