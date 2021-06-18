/* 
* for all other errors
*/

import Head from "next/head";
import Link from "next/link";

import Intro from "../components/Intro";
import { useDarkMode } from "../contexts/AppContext";
import useTranslation from "next-translate/useTranslation";

import styles404 from "../styles/Error404.module.scss";

const Errors = ({statusCode}) => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation("common");

  return (
    <div className={styles404.container}>
      <Head>
        <title>Error {statusCode} | Samuel Mota</title>
      </Head>

      <main className={styles404.mainContainer}>
        <Intro title="error404" />
      </main>

      <aside className={styles404.asideContainer}>
        <h1>{statusCode}</h1>

        <h2>{t("error404_title")}</h2>

          <p>
            {statusCode
              ? t("errors_server", {statusCode: statusCode})
            : t("errors_client", {statusCode: statusCode})}
        </p>
        <p>{t("errors_description")}</p>
      </aside>
    </div>
  );
};

export default Errors;

Errors.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};



