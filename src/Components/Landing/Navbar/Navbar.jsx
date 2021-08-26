import React, { useState } from "react";
import styles from "./navbar.module.css";
import ApartmentIcon from "@material-ui/icons/Apartment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pri: {
    margin: "12px",
    textTransform: "capitalize",
    fontSize: "14px",
    padding: "10px 20px",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#87B3FB",
      color: "#fff",
      border: "1px solid #87B3FB",
    },
  },
  sec: {
    margin: "12px",
    textTransform: "capitalize",
    fontSize: "14px",
    padding: "10px 20px",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#FF567D",
      color: "#fff",
      border: "1px solid #FF567D",
    },
  },
  box: {
    backgroundColor: "#eee",
    textAlign: "center",
    padding: "10px",
    zIndex: "-1",
  },
});

export const Navbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_left}>
          <img
            className={styles.header_logo}
            src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
            alt=""
          />
          <div>
            <p>Flight + Hotel</p>
          </div>
          <div>
            <p>Hotels & Homes</p>
          </div>
          <div>
            <p>Flights</p>
          </div>
          <div>
            <ApartmentIcon />
            <p>Apartments</p>
          </div>
          <div className={styles.dropMenu}>
            <MoreHorizIcon className={styles.moreIcon} />
            <div className={styles.dropdown}>
              <a href="#">Airport Transfers</a>
              <a href="#">Car Rentals</a>
              <a href="#">Things to do</a>
            </div>
          </div>
        </div>
        <div className={styles.navbar_right}>
          <Button className={classes.sec} variant="outlined" color="secondary">
            List your place
          </Button>
          {auth ? (
            <>
              <Avatar alt="SAJ" src="" />
              <p>Subham</p>
              <Button
                onClick={() => setAuth(!auth)}
                className={classes.pri}
                variant="outlined"
                color="primary"
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setAuth(!auth)}
                className={classes.pri}
                color="primary"
              >
                Sign in
              </Button>
              <Button
                className={classes.pri}
                variant="outlined"
                color="primary"
              >
                Create account
              </Button>
            </>
          )}
        </div>
      </div>
      <Box className={classes.box}>
        We know your travel plans may be impacted by COVID-19. Check local
        travel restrictions prior to booking your trip.
      </Box>
    </>
  );
};
