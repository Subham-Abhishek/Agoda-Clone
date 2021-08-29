import React from "react";
import styles from "./dashboardleft.module.css";
import { Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Filtering = () => {
  return (
    <Paper elevation={1} className={styles.filterparent}>
      <div className={styles.filter}>
        <button className={styles.btnnotuse}>Filter</button>
        <button className={styles.btn1}>
          Quarantine Offers <i class="fas fa-sort-down"></i>
        </button>
        <button className={styles.btn2}>
          Price <i class="fas fa-sort-down"> </i>
        </button>
        <button className={styles.btn3}>
          Start ratings <i class="fas fa-sort-down"></i>
        </button>
        <button className={styles.btn4}>
          Property facilities <i class="fas fa-sort-down"></i>{" "}
        </button>
        <button className={styles.btn5}>
          Property type <i class="fas fa-sort-down"></i>
        </button>

        <div className={styles.searchinputsmall}>
            <SearchIcon />
          <input
            className={styles.searchinputtext}
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
    </Paper>
  );
};

export default Filtering;
