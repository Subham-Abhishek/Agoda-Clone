import React from 'react'
import styles from "./dashboardleft.module.css";
import {InputBase,Paper} from '@material-ui/core'

const Filtering = () => {
    return (
        <Paper elevation={1}   className={styles.filterparent}>
        <div className={styles.filter}>
        <button className={styles.btnnotuse}>Filter</button>
        <button  className={styles.btn1} >Quantity Offers  <i class="fas fa-sort-down"></i></button>
        <button className={styles.btn2}>Price <i class="fas fa-sort-down"> </i></button>
        <button className={styles.btn3}>Start ratings  <i class="fas fa-sort-down"></i></button>
        <button className={styles.btn4}>Property facilities <i class="fas fa-sort-down"></i> </button>
        <button className={styles.btn5}>Property type  <i class="fas fa-sort-down"></i></button>
        <div
          className={styles.searchinputsmall}>
              <input className={styles.searchinputtext} type="text" placeholder="Text Seacrh" />
          </div>
          
        </div>
    
        </Paper>
    )
}

export default Filtering
