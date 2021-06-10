import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import styles from "../../styles/SocialIcons.module.scss";

interface SocialIconsProps {
  media: string;
}

const SocialIcons = ({ media = "desktop" }: SocialIconsProps) => {
  return (
    <div
      className={
        media === "tablet"
          ? styles.containerTablet
          : styles.containerDesktop
      }
    >
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
      <a href="mailto:hello@samuelmota.dev?subject=Message from Portfolio website&body=Write your message :)">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
};

export default SocialIcons;
