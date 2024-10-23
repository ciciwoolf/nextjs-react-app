import styles from "./falling-stars.module.scss";

export default function FallingStars() {
  const num = 5;
  return (
    <div className={styles.lines}>
      {[...Array(num)].map((_, index) => (
        <div key={index} className={styles.line}></div>
      ))}
    </div>
  );
}
