import "./globals.scss";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <header className={styles.header}></header>
      <div className={styles.hero}>
        <p className={styles.animate}>Hello Wesley</p>
        <p>Welcome to my Website</p>
      </div>
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.star}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
