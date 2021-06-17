import useTranslation from "next-translate/useTranslation";

import styles from "../../styles/Portfolio.module.scss";
import Intro from "../Intro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState, WheelEventHandler } from "react";

interface PortfolioData {
  key: number;
  repo: string;
  picture: string;
  projectLink: string;
}
interface PortfoliosProps {
  portfolios: PortfolioData[];
  languages: [];
}

const Portfolio = ({ portfolios, languages }: PortfoliosProps) => {
  const [scroll, setScroll] = useState(0);
  const refContainer = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("common");

  function handleWheelEvent(e) {
    if (e.deltaY > 0 && scroll < 800)
      setScroll(scroll + 100);
      else if (e.deltaY <= 0 && scroll >= 0) setScroll(scroll - 100);

    refContainer.current.scrollLeft = scroll;
    // console.log(scroll);
  }

  return (
    <div className={styles.container}>
      <Intro title="portfolio" />

      <div
        className={styles.portfolios}
        onWheel={(el) => handleWheelEvent(el)}
        ref={refContainer}
      >
        {
          //   !hasData ? (
          //   <div className={styles.portfolio}>{textState}</div>
          // ) :
          portfolios.map(({ key, repo, projectLink }) => (
            <div className={styles.portfolio} key={key}>
              <img
                src={`assets/images/${repo}.jpeg`}
                alt=""
                className={styles.portfolioBgImage}
              />
              <div className={styles.overlay}>
                {repo === "portfolio" ? (
                  <h3>
                    {t("this")} {repo}
                  </h3>
                ) : (
                  <>
                    <h3>{repo}</h3>
                    <p>
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                      >
                        Website link{" "}
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    </p>
                  </>
                )}
                <p>
                  <a
                    href={`https://github.com/samuel-mota/${repo}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    Github link <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </p>
                <p>
                  <small>
                    <strong>{t("technologies")}</strong>{" "}
                    {Object.keys(languages[key]).join(", ")}
                  </small>
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default Portfolio;
