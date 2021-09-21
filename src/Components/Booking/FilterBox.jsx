/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
const FilterBox = () => {
  const [user, setUser] = useState({});

  const location = useLocation;
  console.log(location);

  const { id } = useParams();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    axios
      .get(`http://localhost:3001/hotel/${id}`)

      .then((res) => {
        console.log("getIdusers", res.data);
        setUser(res.data);
      })
      .catch((err) => {})
      .finally(() => {
        console.log("users", user);
      });
  };

  // var getHotelsDeatils = localStorage.getItem('testObject')
  // if (getHotelsDeatils === null) {
  //   localStorage.setItem('testObject', JSON.stringify(user));
  // }
  // else {
  //   localStorage.setItem('testObject', JSON.stringify(user));
  // }

  var arr = localStorage.getItem("userHotels");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("userHotels"));
  }

  arr.push(user);

  localStorage.setItem("userHotels", JSON.stringify(arr));

  console.log(JSON.parse(localStorage.getItem("userHotels")));
  console.log(JSON.parse(localStorage.getItem("userHotels")).length);

  return <div></div>;
};

export default FilterBox;
