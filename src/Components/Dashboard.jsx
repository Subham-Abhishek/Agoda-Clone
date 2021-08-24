import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
// import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from "@material-ui/core";
import styles from "./dashboard.module.css";

import Paper from "@material-ui/core/Paper";

const Dashboard = () => {
  const state = useSelector((state) => state.hoteldata);
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <Box className={styles.root}>
        <Paper>
          <Box className={styles.hoteldiv}>
            {state.map((item) => {
              return (
                <>
                  <Box className={styles.hotelchild1}>
                    <img height="200px" width="250px" src={item.url} alt="" />
                    <Box className={styles.childimg1}>
                      <img
                        className={styles.childimg}
                        height="45px"
                        width="61.5px"
                        src={item.urlchild1}
                        alt=""
                      />
                      <img
                        className={styles.childimg}
                        height="45px"
                        width="61.5px"
                        src={item.urlchild2}
                        alt=""
                      />
                      <img
                        className={styles.childimg}
                        height="45px"
                        width="61.5px"
                        src={item.urlchild3}
                        alt=""
                      />
                      <img
                        className={styles.childimg}
                        height="45px"
                        width="61.5px"
                        src={item.urlchild4}
                        alt=""
                      />
                    </Box>
                  </Box>
<Paper>
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
                
                  </Paper>

                  <div>
                      <p>Excellent <i class="far fa-comment">{item.rating}</i></p>

                  </div>
                  </>
              );
            })}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Dashboard;
