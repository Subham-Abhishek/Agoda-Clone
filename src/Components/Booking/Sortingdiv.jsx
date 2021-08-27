import React from 'react'
import styles from "./Sortingdiv.module.css";

const Sortingdiv = ({handleSort,handlereview,handlerate}) => {
  
    return (
    
    <div className={styles.sortdiv}>
    <div className={styles.sortchild1}><p> Sort</p></div>
    <div className={styles.sortchild2}><p className={styles.btntext2}>BEST MATCH</p> </div>
    <div onClick={handleSort} className={styles.sortchild4}><p className={styles.btntext4}>Lowest price first</p> </div>
    <div onClick={handlerate}  className={styles.sortchild4}><p className={styles.btntext4}>Rating</p> </div>
    <div onClick={handlereview} className={styles.sortchild4}><p className={styles.btntext4}> Top Reviewed</p></div>
    <div className={styles.sortchild5}><p className={styles.btntext4}>Secret Details</p> </div>
      </div>
    )
}

export default Sortingdiv
