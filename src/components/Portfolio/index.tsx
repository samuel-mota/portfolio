import { useEffect, useState } from "react";
import usePortfolios from "../getPortfolios";

import Intro from "../Intro";

import styles from "../../styles/Portfolio.module.scss";
import { GetStaticProps } from "next";
import { api } from "../../services/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
  // const { portfolio, isLoading, isError } = usePortfolios("/api/portfolio");

  // const [textState, setTextState] = useState("");
  // const [hasData, setHasData] = useState(false);

  // useEffect(() => {
  //   if (isError) {
  //     setTextState("failed to load");
  //     setHasData(false);
  //   } else if (isLoading) {
  //     setTextState("loading...");
  //     setHasData(false);
  //   } else setHasData(true);
  // }, [isError, isLoading]);

  return (
    <div className={styles.container}>
      <Intro title="portfolio" />

      <div className={styles.portfolios}>
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
                  <h3>this {repo}</h3>
                ) : (
                  <>
                    <h3>{repo}</h3>
                    <p>
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                      >
                        Project link{" "}
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
                    <strong>Languages used:</strong>{" "}
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
