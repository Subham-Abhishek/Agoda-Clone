import React from 'react'
import styles from "./Sortingdiv.module.css";

const Sortingdiv = ({handleSort,handlereview}) => {
  
    return (
    <div className={styles.sortdiv}>
    <div className={styles.sortchild1}><p> Sort</p></div>
    <div className={styles.sortchild2}><p>BEST MATCH</p> </div>
    <div onClick={handleSort} className={styles.sortchild4}><p>Lowest price first</p> </div>
    <div className={styles.sortchild4}><p>Distance</p> </div>
    <div onClick={handlereview} className={styles.sortchild4}><p> Top Reviewed</p></div>
    <div className={styles.sortchild4}><p>Secret Details</p> </div>
      </div>
    )
}

export default Sortingdiv
