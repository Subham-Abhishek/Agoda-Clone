import React from 'react'
import styles from "./dashboardleft.module.css";
import InputBase from '@material-ui/core/InputBase';

const Filtering = () => {
    return (
        <div className={styles.filterparent}>

        <div className={styles.filter}>
            <button className={styles.btnnotuse}>Filter</button>
        <button  className={styles.btn1} >Quantity Offers  <i class="fas fa-sort-down"></i></button>
        <button className={styles.btn2}>Price <i class="fas fa-sort-down"> </i></button>
        <button className={styles.btn3}>Start ratings  <i class="fas fa-sort-down"></i></button>
        <button className={styles.btn4}>Property facilities <i class="fas fa-sort-down"></i> </button>
        <button className={styles.btn5}>Property type  <i class="fas fa-sort-down"></i></button>
        <InputBase
          className={styles.searchinputsmall}
         placeholder="Text Search"
          inputProps={{ "aria-label": "search" }}
        />
        </div>
    
        </div>
    )
}

export default Filtering
