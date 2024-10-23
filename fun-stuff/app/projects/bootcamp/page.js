import Link from "next/link";
import FallingStars from "@components/falling-stars";
import styles from "./page.module.scss";

export default function ProjectPage({ params }) {
  return (
    <main>
      <h1 class={styles.title}> Bootcamp Project </h1>
      <div className={styles.iframeContainer}>
        <iframe
          className={styles.iframe}
          src="https://embed.figma.com/design/aLlIsyRhgVZjoAcOcs8K86/Cici's-Chocolates?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>
      <div class={styles.links}>
        <p>
          <Link
            class={styles.seeMoreLink}
            href="https://github.com/ciciwoolf/proyecto_ciciwoolf_digitalhouse"
          >
            See more on Github
          </Link>
        </p>
        <p>
          <Link href="/projects" class={styles.backToLink}>
            Back to Projects
          </Link>
        </p>
      </div>
      <FallingStars />
    </main>
  );
}
