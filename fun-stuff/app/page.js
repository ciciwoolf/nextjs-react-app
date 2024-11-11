"use client";
import React, { useState, useEffect } from "react";
import "./globals.scss";
import styles from "./page.module.scss";
import InputCharacter from "@components/input-character";

const homeContent = "Welcome to my website";

export default function Home() {
  // manage welcome message state and its visibility
  const [showWelcome, setWelcome] = useState(true);

  // manage the state of user input for the content of the floating characters
  const [char, setChar] = useState("*");

  // React hook to synchronize CSS timer with DOM content
  // If pages reloads (component unmounts) reset the timer
  useEffect(() => {
    const timer = setTimeout(() => setWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []); // [] empty dependency array to ensure it only resets when component unmounts

  return (
    <div
      className={styles.floatingCharacters}
      style={{ "--floating-content": `"${char || "*"}"` }}
    >
      <div className={styles.homeBody}>
        {showWelcome ? (
          <div className={`${styles.welcome} ${styles.fadeIn}`}>
            <p className={styles.greeting}>{homeContent}</p>
          </div>
        ) : (
          <div className={styles.input}>
            <InputCharacter onCharacterChange={setChar} />
          </div>
        )}
      </div>
    </div>
  );
}
