import React, { useEffect, useState } from "react";
import styles from "./formSelection.module.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ApartmentIcon from "@material-ui/icons/Apartment";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightIcon from "@material-ui/icons/Flight";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SearchIcon from "@material-ui/icons/Search";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Calendar } from "./Calendar";
import RoomSelect from "./RoomSelect";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5392F9",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "auto",
    backgroundColor: "#fff",
    transform: "translateY(-260px)",
    borderRadius: 5,
    boxShadow: "0 4px 10px #111111",
  },
  tab: {
    margin: "8px 0",
    fontSize: "14px",
    textShadow: "0.5px 0 1px #777",
  },
  margin: {
    width: "100%",
    margin: "10px 0",
    backgroundColor: "#fff",
    outline: "none",
  },
  input: {
    border: "none",
  },
  form: {
    width: "70%",
    height: window.innerWidth > 970 ? "210px" : "250px",
    margin: "auto",
    backgroundColor: "#F8F7F9",
    transform: "translateY(-260px)",
    borderRadius: 5,
    padding: "40px 50px",
    boxShadow: "0 4px 10px gray, 0 -4px 10px gray",
  },
}));

export const FormSelection = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(window.innerWidth);

  useEffect(() => {
    axios.get("http://localhost:4000/city").then(({ data }) => {
      setCities(data);
    });
  }, []);

  return (
    <>
      <img
        className={styles.background_image}
        src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png"
        alt=""
      />
      <ThemeProvider theme={theme}>
        <Paper theme={theme} square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab
              className={classes.tab}
              icon={<HomeWorkIcon />}
              label="Hotels & Homes"
            />
            <Tab
              className={classes.tab}
              icon={<ApartmentIcon />}
              label="Private Stays"
            />
            <Tab
              className={classes.tab}
              icon={<FlightTakeoffIcon />}
              label="Flight + Hotel"
            />
            <Tab
              className={classes.tab}
              icon={<FlightIcon />}
              label="Flights"
            />
            <Tab
              className={classes.tab}
              icon={<EventAvailableIcon />}
              label="Monthly Stays"
            />
          </Tabs>
        </Paper>
      </ThemeProvider>
      <Paper theme={theme} square className={classes.form}>
        <Grid container>
          <Grid
            className={styles.formFirstLine}
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <SearchIcon />
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Enter a destination"
            />
          </Grid>

          {/* debounce result */}

          <Paper
            style={{ display: search.length === 0 ? "none" : "block" }}
            className={styles.debounceRes}
          >
            {cities
              .filter((city) =>
                city.toLowerCase().indexOf(search) !== -1 ? true : false
              )
              .map((city, idx) => {
                return <p key={idx}>{city}</p>;
              })}
          </Paper>
          <Grid className={styles.formSecLine} container item>
            <Grid className={styles.calendar} item lg={8} md={8} sm={12} xs={12}>
              <Calendar />
            </Grid>
            <Grid
              className={styles.roomSelect}
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
            >
              <RoomSelect />
            </Grid>
          </Grid>
          <button className={styles.searchBtn}>SEARCH</button>
        </Grid>
      </Paper>
    </>
  );
};
