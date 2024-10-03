"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./about-page.module.scss";

const aboutContent1 = "My name is Christine Woolf but I go by Cici";
const aboutContent2 = "I go by Cici or C^2 :-)";
const aboutContent3 = "I'm a Fullstack Software Developer";

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
    }, 3500); // change msg every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <main styles={styles.aboutMain}>
      <p className={`${styles.aboutText} ${animation}`}>{currentMsg}</p>
    </main>
  );
}
