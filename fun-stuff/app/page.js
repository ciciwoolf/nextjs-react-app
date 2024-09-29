import "./globals.scss";
import styles from "./page.module.scss";
import bioImg from "../assets/bio-pic.png";
import Image from "next/image";

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
        <Image src={bioImg} alt="Logo" width={180} height={200} />
      </div>
      <div className={styles.lines}>
        {[...Array(num)].map((_, index) => (
          <div key={index} className={styles.line}></div>
        ))}
      </div>
    </div>
  );
}
