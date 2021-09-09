import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataSuccess, searchDataFailure, searchDataRequest, searchDataSuccess } from "../../Redux/Bookingredux/action";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Button, Box } from "@material-ui/core";
import styles from "../../Components/Booking/dashboard.module.css";

import Paper from "@material-ui/core/Paper";
import { color, fontFamily, fontWeight } from "@material-ui/system";
import Sortingdiv from "./Sortingdiv";
import Searchdiv from "./Searchdiv";
import axios from "axios";
import Dashboardleft from "./Dashboardleft";
import { Switch } from 'antd';
import FilterBox from "./FilterBox";
import { NavLink } from "react-router-dom";
import Filtering from "./Filtering";
import {ScrollUpNav} from "../Landing/Navbar/ScrollUpNav"
import { AppContext } from "../../context/Provider";
import {Loading} from "../Loading/Loading"
import { Footer } from "../Landing/Footer/Footer";
import { Navbar } from "../Landing/Navbar/Navbar";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false)
  const state = useSelector((state) => state.hoteldata);
  const [loading, setLoading] = useState(false)

  console.log(state);
  const dispatch = useDispatch();

  const {searchedCity} = useContext(AppContext)

  const handleSort = () => {
    axios
      .get("https://agoda-api.herokuapp.com/hotel?_sort=price&_order=asc")
      .then((res) => {
        console.log("result=", res.data);
        dispatch(getDataSuccess(res.data));
      });
  };

  const handlereview = () => {
    axios
      .get("https://agoda-api.herokuapp.com/hotel?_sort=reviews&_order=desc")
      .then((res) => {
        console.log("result=", res.data);
        dispatch(getDataSuccess(res.data));
      });
  };
  const handlerate = () => {
    axios
      .get("https://agoda-api.herokuapp.com/hotel?_sort=rating&_order=desc")
      .then((res) => {
        console.log("result=", res.data);
        dispatch(getDataSuccess(res.data));
      });
  };

  const handlechangecheck = () => {
    axios
      .get("https://agoda-api.herokuapp.com/hotel?_sort=distance&_order=desc")
      .then((res) => {
        console.log("result=", res.data);
        dispatch(getDataSuccess(res.data));
      });
  };

const searchData = () => {
    dispatch(searchDataRequest())
    return axios.get(`https://agoda-api.herokuapp.com/hotel?city=${searchedCity.toLowerCase()}`)
        .then((res) => {
            console.log(res.data)
            dispatch(searchDataSuccess(res.data))
        })
        .catch((err) => {
            dispatch(searchDataFailure(err))
        })
}

const handleClicking = () => {
  setClicked(!clicked)
}
//loading useffect

useEffect(() => {
  const timer = setTimeout(() => {
      setLoading(true)
  }, 1500);
  return () => clearTimeout(timer);
  }, []);



useEffect(() => {
    searchData();
    // dispatch(getData());
  }, [clicked]);


  
  return  (
   
    <>
                 {loading && <Navbar/>}

    {loading ? <div>

 
      {/* <Searchdiv /> */}
     <ScrollUpNav handleClicking={handleClicking} calcScroll="150"/>
    <Filtering/>

     <Box className={styles.root}>
        <Box className={styles.root1}>
          <Dashboardleft handlechangecheck={handlechangecheck} />
        </Box>

        <div className={styles.hotelpaper}>
          <Box className={styles.root2}>
            <div className={styles.upgrade}>
              <div className={styles.imgText}>
              <img
                style={{ margin: "10px" }}
                height="49px"
                src="https://cdn6.agoda.net/images/kite-js/banner/special-offers-colored3.svg"
                alt=""
              />

              <div className={styles.upgradetext}>
                <h5 className={styles.upgradetext1}>
                  Agoda Special Offers <br /> Upgrade your experience with Agoda
                  Special Offers Hurry
                </h5>
              </div>
              </div>
              <Switch className={styles.slidebtn} />
            </div>

            <Sortingdiv
              handleSort={handleSort}
              handlereview={handlereview}
              handlerate={handlerate}
            />

            {state.map((item) => {
              return (
                <NavLink className={styles.nav} to={`/hotel/${item.id}`}>
                  <Paper  elevation={1}className={styles.hoteldiv}>
                    <Box className={styles.hotelchild1}>
                      <div className={styles.bigimg}>
                        <div className={styles.bigimgtext}>
                          <p> Free cancellation </p>
                        </div>
                        <div className={styles.bigimgtrain}>
                          <i class="fas fa-subway"></i>
                        </div>
                        <img
                          height="200px"
                          width="250px"
                          src={item.url}
                          alt=""
                        />
                      </div>
                      <Box className={styles.childimg1}>
                        <img
                          className={styles.childimg}
                          height="49px"
                          width="61.5px"
                          src={item.urlchild1}
                          alt=""
                        />
                        <img
                          className={styles.childimg}
                          height="49px"
                          width="61.5px"
                          src={item.urlchild2}
                          alt=""
                        />
                        <img
                          className={styles.childimg}
                          height="49px"
                          width="61.5px"
                          src={item.urlchild3}
                          alt=""
                        />
                        <img style={{filter:"brightness(0.5)"}}
                          className={styles.childimg}
                          height="49px"
                          width="61.5px"
                          src={item.urlchild4}
                          alt=""

                        />
                      </Box>
                    </Box>
                    {/* <Paper> */}
                      <div className={styles.hoteldetails}>
                        <h3>{item.hotel}</h3>

                        <div>
                          <i
                            style={{ color: "orange" }}
                            className="fas fa-star"
                          ></i>
                          <i
                            style={{ color: "orange" }}
                            className="fas fa-star"
                          ></i>
                          <i
                            style={{ color: "orange" }}
                            className="fas fa-star"
                          ></i>
                          <i
                            style={{ color: "orange" }}
                            className="fas fa-star-half"
                          ></i>
                          <span className={styles.directiontext}>
                            {item.direction}
                          </span>
                        </div>
                        <span className={styles.btnspan}>
                          <button className={styles.detailsbtn}>
                            <p className={styles.btntext}>Breakfast</p>
                          </button>
                          <button className={styles.detailsbtn}>
                            <p className={styles.btntext}>Free Wifi</p>
                          </button>
                          <button className={styles.detailsbtndinner}>
                            <p className={styles.btntext}>Dinner Includes</p>
                          </button>
                          <button className={styles.detailsbtnplus}>
                            <p className={styles.btntext}>+1</p>
                          </button>
                        </span>

                        <div className={styles.updatedetail}>
                          <p>
                            <i class="fas fa-flag"></i> {item.update}
                          </p>
                        </div>

                        <div className={styles.payment}>
                          <i class="fas fa-money-check"></i> {item.payment}
                        </div>

                        <div className={styles.coupon}>
                          <i class="fas fa-pencil-alt"></i> {item.coupon}
                        </div>
                      </div>
                    {/* </Paper> */}
                    <div style={{ width: "240px" }}>
                      <div className={styles.hotelfacility}>
                        <div className={styles.hotelfacilitychild}>
                          <p
                            style={{
                              display: "flex",
                              marginLeft: "40px",
                              color: "rgb(42, 42, 46)",
                              fontWeight: "500",
                            }}
                          >
                            {" "}
                            Excellent{" "}
                            <div className={styles.ratingdiv}>
                              <h5
                                style={{
                                  color: "white",
                                  padding: "5px 0px 0px 5px ",
                                }}
                              >
                                {item.rating}
                              </h5>
                            </div>{" "}
                          </p>

                          <p className={styles.rateingvalue}>
                            {" "}
                            {item.reviews} reviews{" "}
                          </p>

                          <div className={styles.offer}>
                            <img
                              height="15px"
                              src="//cdn6.agoda.net/images/GoLocal/GoLocal_yellow.svg"
                              alt=""
                            />
                            <p className={styles.offertxt}>GoLocal offer</p>
                          </div>

                          <div className={styles.pricediv}>
                            <p className={styles.pricetext}>
                              Price per night as low as{" "}
                            </p>
                            <p className={styles.pricevalue}>Rs.{item.price}</p>
                            <p className={styles.cancel}>FREE CANCELLATION</p>
                          </div>

                          <div>
                            <button
                              className={styles.roombtn}
                              variant="contained"
                            >
                              Select Room <i class="fas fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </NavLink>
              );
            })}
          </Box>
        </div>
      </Box>
       
       
         </div>

             :<Loading/>}
             {loading && <Footer/>}

</>
  );
};

export default Dashboard;
