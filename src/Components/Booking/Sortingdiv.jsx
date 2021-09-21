import React from "react";
import styles from "./Sortingdiv.module.css";

const Sortingdiv = ({ handleSort, handlereview, handlerate }) => {
  return (
    <div className={styles.sortdiv}>
      <div className={styles.sortchild1}>
        <p> Sort</p>
      </div>
      <button className={styles.sortchild2}>
        <p className={styles.btntext2}>BEST MATCH</p>{" "}
      </button>
      <button onClick={handleSort} className={styles.sortchild4}>
        <p className={styles.btntext4}>Lowest price first</p>{" "}
      </button>
      <button onClick={handlerate} className={styles.sortchild4}>
        <p className={styles.btntext4}>Rating </p>{" "}
      </button>
      <button onClick={handlereview} className={styles.sortchild4}>
        <p className={styles.btntext4}> Top Reviewed</p>
      </button>
      <button className={styles.sortchild5}>
        <p className={styles.btntext4}>Secret Details</p>{" "}
      </button>
    </div>
  );
};

export default Sortingdiv;
