import Link from "next/link";
import styles from "../../styles/LocalSwitch.module.scss";

interface LocalSwitchProps {
  lang: string;
  media?: string;
}

export default function LocalSwitch({ lang, media }: LocalSwitchProps) {

  return (
    <div
      className={`${styles.container} ${
        media === "mobile" && styles.containerMobile
      }`}
    >
      <Link href="/" locale="pt">
        <a className={`${styles.pt} ${lang !== "pt" && styles.disabled}`}>pt</a>
      </Link>
      <Link href="/" locale="en">
        <a className={`${styles.en} ${lang !== "en" && styles.disabled}`}>en</a>
      </Link>
    </div>
  );
}
