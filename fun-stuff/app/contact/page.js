import bioImg from "../../assets/bio-pic.png";
import Image from "next/image";
import styles from "./page.module.scss";

export default function ContactPage() {
  return (
    <main>
      <main class={styles.mainContactPage}>
        <p>Contact Form coming soon</p>
        <Image src={bioImg} alt="Logo" width={180} height={200} />
      </main>
    </main>
  );
}
