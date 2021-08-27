import React,{useState,useEffect} from 'react'
import { useParams,useHistory,useLocation } from 'react-router-dom';
import axios from 'axios';
const FilterBox = () => {
    const [user,setUser] = useState([]);

    const location= useLocation
    console.log(location)
   
    const {id} = useParams();

    const getUserDetails = ()=>{
        axios.get(`http://localhost:3001/hotel/${id}`)
    .then((res) =>{
        console.log(res.data)
        setUser(res.data);
               })
    .catch((err)=>{
               })
    }
    useEffect(()=>{

    getUserDetails();
    },[])

    return (
        <div>
            <button>Quarintine</button>
            <h3>{user.hotel}</h3>
            <p>dkdskldkldlkdkllk</p>
            <img src={user.url} alt="" />
        </div>
    )
}

export default FilterBox
