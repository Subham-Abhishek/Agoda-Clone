import React, { useEffect, useState } from "react";
import styles from "./landingPage.module.css";
import { FormSelection } from "../../Components/Landing/FormSelection/FormSelection";
import { Navbar } from "../../Components/Landing/Navbar/Navbar";
import { DestinationCarousels } from "../../Components/Landing/DestinationCarousels/DestinationCarousels";
import { Footer } from "../../Components/Landing/Footer/Footer";
import { Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Calendar } from "../../Components/Landing/FormSelection/Calendar";
import RoomSelect from "../../Components/Landing/FormSelection/RoomSelect";

export const LandingPage = () => {
  const [search, setSearch] = useState("");
  const [scroll, setScroll] = useState(0);
  // const [cities, setCities] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScroll(window.scrollY);
    });
    console.log(scroll);
  });

  return (
    <>
      <Navbar />
      <FormSelection />

      <Container maxWidth="lg">
        <Grid container>
          <div className={styles.advertImg}>
            <Grid className={styles.advertGrid} xl={6} lg={6} md={12} sm={12}>
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcPD2021H2/en-us/home_banner.png"
                alt=""
              />
            </Grid>
            <Grid className={styles.advertGrid} xl={6} lg={6} md={12} sm={12}>
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcSP20210824EUv2/en-us.png"
                alt=""
              />
            </Grid>
          </div>
        </Grid>
      </Container>

      {/* hidden scroll-up navbar */}

      <Grid container>
        <div
          style={{ display: scroll > 500 ? "flex" : "none" }}
          className={styles.scrollNav}
        >
          <Grid item lg={4}>
            <div className={styles.scrollNavSearch}>
              <SearchIcon />
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Enter a destination"
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <div>
              <Calendar />
            </div>
          </Grid>
          <Grid item lg={3}>
            <div>
              <RoomSelect />
            </div>
          </Grid>

          <button>Search</button>
        </div>
      </Grid>

      {/* hidden scroll-up navbar end */}

      <DestinationCarousels />
      <Footer />
    </>
  );
};
