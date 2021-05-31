import styles from "../../styles/Intro.module.scss";

interface IntroProps {
  title: string;
  icon: string;
}

const Intro = ({ title, icon }: IntroProps) => {
  return (
    <div className={styles.introContainer}>
        {title} and {icon}
    </div>
  );
};

export default Intro;
