"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./about-page.module.scss";

// Array of messages
const aboutMessages = [
  "My name is Christine Woolf",
  "I go by Cici or C^2 :-)",
  "I'm a Fullstack Software Developer",
];

export default function AboutPage() {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0); // Track the index of the current message
  const [animation, setAnimation] = useState(styles.slideIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(styles.slideOut);

      setTimeout(() => {
        setCurrentMsgIndex((prevIndex) =>
          prevIndex === aboutMessages.length - 1 ? 0 : prevIndex + 1
        );

        setAnimation(styles.slideIn);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.aboutMain}>
      <p className={`${styles.aboutText} ${animation}`}>
        {aboutMessages[currentMsgIndex]}
      </p>
    </main>
  );
}
