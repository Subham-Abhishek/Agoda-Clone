import React,{useEffect} from 'react'
import {  useDispatch,useSelector} from "react-redux"
import { getData } from '../Redux/action'
// import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Box } from '@material-ui/core';


import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
     
        margin: theme.spacing(1),
        width: "100%",
        background:"red"
    },
      hoteldiv:{
        display:"flex",
        width: "70%",
        height: "250px",
        border:"1px solid grey" ,
      },
      hotelchild1:{
       
      },
      childimg:{
          margin: "0.5px"
      },
      hotelname:{
          fontSize:"15px",
          width:"40%",
          border:"1px solid black",
          marginLeft:"15px"
      },
      directiontext:{
      fontSize:"13px"
      
    }

     
  }));


const Dashboard = () => {
    const state=useSelector((state)=>state.hoteldata)
    console.log(state)
    const dispatch=useDispatch()
   
    useEffect(() => {
        dispatch(getData())
    },[dispatch])

    const classes = useStyles();
    


    return (
        <>
       
        <Box className= {classes.root}>
            <Paper>

            <Box className= {classes.hoteldiv}>
         
                {state.map((item)=>{
                    return  <>
                    
                 <Box className= {classes.hotelchild1} >
                   <img height="200px"width="250px" src={item.url} alt="" />
                   <Box >
                   <img className= {classes.childimg}  height="45px"width="61.5px"src={item.urlchild1} alt="" />
                   <img className= {classes.childimg} height="45px"width="61.5px"src={item.urlchild2} alt="" />
                   <img  className= {classes.childimg}height="45px"width="61.5px"src={item.urlchild3} alt="" />
                   <img className= {classes.childimg}height="45px"width="61.5px"src={item.urlchild4} alt="" />
                   </Box>
                  
                   </Box>
                   <Box  className= {classes.hotelname} >
                      <h3>{item.hotel}</h3>
                      
                      <p className= {classes.directiontext}><i style={{color:"orange"}} class="fas fa-star"></i><i style={{color:"orange"}} class="fas fa-star"></i><i style={{color:"orange"}} class="fas fa-star"></i><i style={{color:"orange"}}
                            class="fas fa-star-half"></i>
                            {item.direction}
                      </p>

                      <Button variant="contained" color="secondary">Secondary</Button>



                   </Box>
                  


                   </>
                   
                   })}
                     </Box>
                     </Paper>


        </Box>
        </>
    )
}

export default Dashboard
