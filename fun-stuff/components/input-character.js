"use client";
import styles from "./input-character.module.scss";
import { useState } from "react";

const chooseMsg = "Type in a letter, number, or character (ex: * ^ &) ";

export default function InputCharacter({ onCharacterChange }) {
  const [initialChar, setChar] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setChar(value);
    onCharacterChange(value); // this will pass the value to the Home component
  };

  return (
    <div className={styles.chooseMsg}>
      <div className={styles.label}>{chooseMsg}</div>
      <input
        className={styles.input}
        value={initialChar}
        onChange={handleChange}
      ></input>
    </div>
  );
}
