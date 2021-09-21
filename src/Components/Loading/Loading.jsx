import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.mainloadingDiv}>
      <div className={styles.loadingDiv}>
        <img
          src="https://cdn6.agoda.net/images/brand/agoji-parachute.gif"
          alt="gif1"
        ></img>
        <h3>BEST PRICE GUARANTEE</h3>
        <h5>We'll match any price on the web or refund the difference</h5>
      </div>
    </div>
  );
}

export { Loading };
