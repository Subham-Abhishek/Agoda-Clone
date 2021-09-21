import React from "react";
import styles from "./dashboardleft.module.css";
import SearchIcon from "@material-ui/icons/Search";

const Filtering = () => {
  return (
    <div className={styles.filterparent}>
      <div className={styles.filter}>
        <div className={styles.filterbtns}>
          <span className={styles.btnnotuse}>Filter</span>
          <button className={styles.btn1}>
            Quarantine Offers <i class="fas fa-sort-down"></i>
          </button>
          <button className={styles.btn2}>
            Price <i class="fas fa-sort-down"></i>
          </button>
          <button className={styles.btn3}>
            Stars <i class="fas fa-sort-down"></i>
          </button>
          <button className={styles.btn5}>
            More <i class="fas fa-sort-down"></i>
          </button>
        </div>

        <div className={styles.searchinputsmall}>
          <SearchIcon />
          <input
            className={styles.searchinputtext}
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
    </div>
  );
};

export default Filtering;
