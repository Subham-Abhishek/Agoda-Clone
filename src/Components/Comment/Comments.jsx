import styles from "./Comment.module.css"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
function Comment() {
    const [comment, setComment] = useState([])

    useEffect(() => {
        getComments()
    }, [])

    const getComments = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments?_limit=10")
            .then((res) => (setComment(res.data)))
            .catch((err)=>(console.log(err)))
    }

  
    return <div className={ styles.upperdiv}>
        <span className={styles.commentspan}>Showing 500+ verified guest comments</span>
        <hr className={styles.commenthr} />
        
        {
            comment.map((item, index) => {
                return <div key={index}>
                <div className={styles.commentMainDiv}>
                    <div className={styles.commentMainDiv1}>
                        <h5>{item.email}</h5>
                        <p><i className="far fa-hospital"></i> Superior Room</p>
                    </div>
                    <div className={styles.commentMainDiv2}>
                        <p>"{item.name}"</p>
                        <span>{item.body}</span>
                        <span>Reviewed January, 2020</span>
                        <hr className={styles.commenthr} />
                        <button >See room deals</button>
        
                    </div>
                    </div>
                    <p style={{ textAlign: "right", fontSize: "15px" }}>Did you find this helpful?  <span style={{color:"rgb(83, 146, 249)"}}>Yes   No</span> </p>
                    <hr className={styles.commenthr} />
                </div>
            })
        }

    </div>
}

export {Comment}