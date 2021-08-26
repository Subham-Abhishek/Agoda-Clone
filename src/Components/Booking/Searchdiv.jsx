import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import styles from "./Sortingdiv.module.css";
import {Paper,Button,InputBase,IconButton} from "@material-ui/core";
// import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/Group';

import { searchData } from "../../Bookingreducer/Redux/action";

const Searchdiv = () => {
    const [query,setQuery]=useState("")
    const dispatch=useDispatch()

    const handlesearch=()=>{
        dispatch(searchData(query))
    }
   

    return (
       
       <div className={styles.searchdiv} >
       {/* <input className={styles.searchinput} value={query} 
        onChange={(e)=>setQuery(e.target.value)} placeholder="search"/> */}
 
    
<InputBase  className={styles.searchinput} value={query}  
   onChange={(e)=>setQuery(e.target.value)}
              placeholder="Search"
              
              inputProps={{ 'aria-label': 'search' }}
            />

<InputBase  className={styles.searchinputdate} type="date" 
    defaultValue="2017-05-24"

              inputProps={{ 'aria-label': 'search' }}
            />

<InputBase  className={styles.searchinputdate2} type="date" 
    defaultValue="2017-05-24"         
   inputProps={{ 'aria-label': 'search' }}
 />
< GroupIcon className={styles.publicicon} >

</GroupIcon>

<InputBase  className={styles.searchinputroom} 
   inputProps={{ 'aria-label': 'search' }}

   defaultValue="2 rooms"
 />


        <button variant="contained"  className={styles.searchbtn}  onClick={handlesearch}>Search</button>
      
       </div>
        

       
        
    )
}

export default Searchdiv
