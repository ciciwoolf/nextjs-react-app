import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>
        Christine Woolf
        <br />
        <span className={styles.position}>Fullstack Software Engineer</span>
      </h1>
      <p>I'm building a site using Nextjs :-D</p>
      <p>
        <Link href="/about" className={styles.link}>
          About Me
        </Link>
      </p>
    </main>
  );
}
