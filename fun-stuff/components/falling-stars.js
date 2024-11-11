import styles from "./falling-stars.module.scss";

/** Notes:
 *  Array constructor to create an array using the num variable Array(num)
 * ... spread operator to 'spread' the elements into the array, which are undefined
 * map method to iterate through each element
 * using the underscore _ as a placeholder for each element as the first parameter
 * adding in the index as the second parameter
 * creating a div element for each array element (5 total)
 * applying a key of index to each (in React, it's important to use keys)
 * applying a className attribute linking it to the style sheet, specifily class 'line'
 */

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
