import React, { useContext, useEffect, useState } from "react";
import styles from "./scrollUpNav.module.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Grid, Paper } from "@material-ui/core";
import { Calendar } from "../FormSelection/Calendar";
import RoomSelect from "../FormSelection/RoomSelect";
import { AppContext } from "../../../context/Provider";
import axios from "axios";
import { Link } from "react-router-dom";

export const ScrollUpNav = (props) => {
  const [scroll, setScroll] = useState(0);
  const [cities, setCities] = useState([]);
  const [debounce, setDebounce] = useState(false);
  const [focus, setFocus] = useState(false);

  const { searchedCity, setSearchedCity } = useContext(AppContext);

  const handleSearch = (e) => {
    // setSearch(e.target.value);
    setSearchedCity(e.target.value);
  };

  const handleDebounceCity = (city) => {
    console.log(city);
    // setSearch(city)
    setSearchedCity(city);
    setDebounce(false);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/city").then(({ data }) => {
      setCities(data);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScroll(window.scrollY);
    });
    // console.log(scroll);
  });

  return (
    <div className={styles.container}>
      <Grid container>
        <div
          style={{
            backgroundColor: focus ? "rgba(0,0,0,0.7)" : "transparent",
            display: focus ? "block" : "none",
          }}
          className={styles.main_container}
        ></div>
        <div
          style={{
            display: scroll > props.calcScroll ? "flex" : "none",
          }}
          className={styles.scrollNav}
        >
          <Grid item >
            <div className={styles.scrollNavSearch}>
              <SearchIcon />
              <input
                onFocus={() => {
                  setDebounce(true);
                  setFocus(true);
                }}
                onBlur={() => {
                  setFocus(false);
                }}
                type="text"
                value={searchedCity}
                onChange={handleSearch}
                placeholder="Enter a destination"
              />
            </div>
          </Grid>

          {/* debounce result */}

          <Paper
            style={{ display: debounce ? "block" : "none" }}
            className={styles.debounceRes}
          >
            <div className={styles.debounceTooltip}></div>
            {cities
              .filter((city) =>
                // city.toLowerCase().indexOf(search.toLowerCase()) !== -1
                city.toLowerCase().indexOf(searchedCity.toLowerCase()) !== -1
                  ? true
                  : false
              )
              .map((city, idx) => {
                return (
                  <div
                    onClick={() => handleDebounceCity(city)}
                    className={styles.debounceCity}
                    key={idx}
                  >
                    <LocationOnIcon className={styles.locationIcon} />
                    <p>{city}, India</p>
                  </div>
                );
              })}
          </Paper>

          {/* debounce result end */}

          <Grid item>
            <div className={styles.scrollNavCalendar}>
              <Calendar setFocus={setFocus} />
            </div>
          </Grid>
          <Grid item>
            <div className={styles.scrollNavRoomSelect}>
              <RoomSelect setFocus={setFocus} />
            </div>
          </Grid>

          <button onClick={props.handleClicking} className={styles.searchBtn}>
            <Link style={{ color: "#fff" }} to="/hotel">
              SEARCH
            </Link>
          </button>
        </div>
      </Grid>
    </div>
  );
};
