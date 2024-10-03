import "./globals.scss";
import styles from "./page.module.scss";

const homeContent = "Welcome to my website";

export default function Home() {
  return (
    <div className={styles.colorsBody}>
      <header className={styles.header}></header>
      <div className={styles.hero}>
        <p className={styles.greeting}>{homeContent}</p>
      </div>
    </div>
  );
}
