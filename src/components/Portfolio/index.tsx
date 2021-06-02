import { useEffect, useState } from "react";
import Image from 'next/image';
import usePortfolio from "../usePortfolio";

import Intro from "../Intro";

import styles from "../../styles/Portfolio.module.scss";

interface PortfolioProps {
  name: string;
}

const Portfolio = () => {
  const { portfolio, isLoading, isError } = usePortfolio("/api/portfolio");

  const [textState, setTextState] = useState("");
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (isError) {
      setTextState("failed to load");
      setHasData(false);
    } else if (isLoading) {
      setTextState("loading...");
      setHasData(false);
    } else setHasData(true);
  }, [isError, isLoading]);

  return (
    <div className={styles.container}>
      <Intro title="portfolio" />

      <div className={styles.portfolios}>
        {!hasData ? (
          <div>{textState}</div>
        ) : (
          portfolio.map(({ name }: PortfolioProps) => (
            <div className={styles.portfolio} key={name}>
              <img
                src={`/assets/images/samuel-mota.jpg`} alt="" className={styles.portfolioBgImage}
              />
              {name}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Portfolio;
