import React, { useState } from "react";
import styles from "./formSelection.module.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightIcon from "@material-ui/icons/Flight";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SearchIcon from "@material-ui/icons/Search";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Calendar } from "./Calendar";
import RoomSelect from "./RoomSelect";

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
    height: "200px",
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
              value="1"
            />
            <Tab
              className={classes.tab}
              icon={<NightsStayIcon />}
              label="Private Stays"
              value="2"
            />
            <Tab
              className={classes.tab}
              icon={<FlightTakeoffIcon />}
              label="Flight + Hotel"
              value="3"
            />
            <Tab
              className={classes.tab}
              icon={<FlightIcon />}
              label="Flights"
              value="4"
            />
            <Tab
              className={classes.tab}
              icon={<EventAvailableIcon />}
              label="Monthly Stays"
              value="5"
            />
          </Tabs>
        </Paper>
      </ThemeProvider>
      <Paper theme={theme} square className={classes.form}>
        <Grid container>
          <Grid className={styles.formFirstLine} item lg={12} md={12}>
            <SearchIcon />
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Enter a destination"
            />
          </Grid>

          {/* debounce result */}

          <Paper className={styles.debounceRes}></Paper>
          <Grid className={styles.formSecLine} container item>
            <Grid className={styles.calendar} item lg={8}>
              <Calendar />
            </Grid>
            <Grid className={styles.roomSelect} item lg={4}>
              <RoomSelect />
            </Grid>
          </Grid>
          <button className={styles.searchBtn}>SEARCH</button>
        </Grid>
      </Paper>
    </>
  );
};
