"use client";
import Link from "next/link";
import FallingStars from "@components/falling-stars";
import ReactPlayer from "react-player/lazy";
import styles from "./page.module.scss";

export default function ProjectPage() {
  return (
    <main class={styles.artPage}>
      <h1>Art</h1>
      <div class={styles.videoContainer}>
        <div class={styles.video}>
          <ReactPlayer
            url="https://vimeo.com/1022338992"
            onReady
            playing="true"
            loop="true"
          />
          <p>SpiderWeb</p>
        </div>
        <div class={styles.video}>
          <ReactPlayer
            url="https://vimeo.com/1022340807"
            onReady
            playing="true"
            loop="true"
          />
          <p>Violet River</p>
        </div>
      </div>
      <div class={styles.links}>
        <p>
          <Link href="https://github.com/ciciwoolf/javascript-art">
            Click here to see more projects on Github
          </Link>
        </p>
        <p>
          <Link href="/projects">Back to Projects</Link>
        </p>
      </div>
      <FallingStars />
    </main>
  );
}
