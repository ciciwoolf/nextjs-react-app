"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./about-page.module.scss";

const aboutContent1 = "I'm building this site using Reactjs and Nextjs :-D";
const aboutContent2 = "I'm having lots of fun";

export default function AboutPage() {
  const [currentMsg, setCurrentMsg] = useState(aboutContent1);

  const [animation, setAnimation] = useState(styles.slideIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(styles.slideOut);
      setTimeout(() => {
        setCurrentMsg((prev) =>
          prev === aboutContent1 ? aboutContent2 : aboutContent1
        );
        setAnimation(styles.slideIn);
      }, 500);
    }, 3000); // change msg every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <main styles={styles.aboutMain}>
      <p className={`${styles.aboutText} ${animation}`}>{currentMsg}</p>
    </main>
  );
}
