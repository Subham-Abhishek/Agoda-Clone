import styles from "./Comment.module.css"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
function Comment() {
    const [comment, setComment] = useState([])
    const [page, setPage] = useState(1);

    useEffect(() => {
        getComments()
    }, [])

    const getComments = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
            .then((res) => (setComment(res.data)))
            .catch((err) => (console.log(err)))
    }

    const handlePage = (e) => {
        getComments()
        setPage(e.target.value)
    }

    return <div className={ styles.upperdiv}>
        <span className={styles.commentspan}>Showing 500+ verified guest comments</span>
        <hr className={styles.commenthr} />

        <div className={styles.commentpagination}>
            <div className={styles.commentpaginationbuttton}>
                
                <button>{'<'}</button>
                <button onClick={ (e)=>(handlePage(e))} value="1">1</button>
                <button onClick={ (e)=>(handlePage(e))} value="2">2</button>
                <button onClick={ (e)=>(handlePage(e))} value="3">3</button>
                <button onClick={ (e)=>(handlePage(e))} value="4">4</button>
                <button onClick={ (e)=>(handlePage(e))} value="5">5</button>
                <button onClick={ (e)=>(handlePage(e))} value="6">6</button>
                <button onClick={ (e)=>(handlePage(e))} value="7">{ `>`}</button>
            </div>
        </div>
        
        {
            comment.map((item, index) => {
                return <div key={index}>
                <div className={styles.commentMainDiv}>
                        <div className={styles.commentMainDiv1}>
                            <div style={{display:"flex",  color:"#5392f9"}}><h1 style={{color:"#5392f9", fontSize:"35px"}}>10.0 </h1><h3 style={{  color:"#5392f9", paddingTop:"25px", marginLeft:"5px"}}>Exceptional</h3></div>
                        <h5>{item.email}</h5>
                        <p><i className="far fa-hospital"></i> Superior Room</p>
                    </div>
                    <div className={styles.commentMainDiv2}>
                            <p> <i class="fas fa-plus-circle" style={{color:"rgb(133,193,80)", marginRight:"10px"}}></i>"{item.name}"</p>
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