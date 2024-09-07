import styles from "./about.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <img src="./logo.png"></img>
      <p>
        <Link href="/" className={styles.link}>
          Home
        </Link>
      </p>
    </main>
  );
}
