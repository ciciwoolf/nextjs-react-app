import "./globals.scss";
import styles from "./page.module.scss";

const homeContent = "Welcome to my Website";
const greeting = "Hello";

export default function Home() {
  const num = 5;
  return (
    <div>
      <header className={styles.header}></header>
      <div className={styles.hero}>
        <p className={styles.animate}>{greeting}</p>
        <p>{homeContent}</p>
      </div>
      <div className={styles.lines}>
        {[...Array(num)].map((_, index) => (
          <div key={index} className={styles.line}></div>
        ))}
      </div>
    </div>
  );
}
