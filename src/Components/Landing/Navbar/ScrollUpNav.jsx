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

export const ScrollUpNav = ({ calcScroll }) => {
  const [scroll, setScroll] = useState(0);
  const [cities, setCities] = useState([]);
  const [debounce, setDebounce] = useState(false);
  const [, setFocus] = useState(false);

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
    axios.get("http://localhost:4000/city").then(({ data }) => {
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
    <>
      <Grid container>
        <div
          style={{ display: scroll > calcScroll ? "flex" : "none" }}
          className={styles.scrollNav}
        >
          <Grid item lg={4}>
            <div className={styles.scrollNavSearch}>
              <SearchIcon />
              <input
                onFocus={() => {
                  setDebounce(true);
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

          <Grid item lg={5}>
            <div>
              <Calendar setFocus={setFocus} />
            </div>
          </Grid>
          <Grid item lg={3}>
            <div>
              <RoomSelect setFocus={setFocus} />
            </div>
          </Grid>

          <button>
            <Link style={{ color: "#fff" }} to="/milind">
              SEARCH
            </Link>
          </button>
        </div>
      </Grid>
    </>
  );
};
