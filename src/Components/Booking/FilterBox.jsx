import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
const FilterBox = () => {
  const [user, setUser] = useState([]);

  const location = useLocation;
  console.log(location);

  const { id } = useParams();

  const getUserDetails = () => {
    axios
      .get(`http://localhost:3001/hotel/${id}`)
        
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        postusers()

      })
      .catch((err) => {});
  };



  useEffect(() => {
    getUserDetails();
  }, []);

  const postusers = ()=>{
    axios.post("http://localhost:3035/selecthotel", user)
    .then((res) => {
      console.log( "postdata=",res.data);
      gethotels()
    })
    .catch((err) => {});
};


const gethotels = ()=>{
  axios.get("http://localhost:3035/selecthotel")
  .then((res) => {
    console.log( "getdata=",res.data);
  
  })
  .catch((err) => {
    console.log("error from gethotels=",err)
  });
};

  console.log("user=", user)
  return (
    <div >
      <button>Quarintine</button>
      <h3>{user.hotel}</h3>
      <p>dkdskldkldlkdkllk</p>
      <img src={user.url} alt="" />
    </div>
  );
};

export default FilterBox;
