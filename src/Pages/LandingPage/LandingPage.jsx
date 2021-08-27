import React from "react";
import styles from "./landingPage.module.css";
import { FormSelection } from "../../Components/Landing/FormSelection/FormSelection";
import { Navbar } from "../../Components/Landing/Navbar/Navbar";
import { DestinationCarousels } from "../../Components/Landing/DestinationCarousels/DestinationCarousels";
import { Footer } from "../../Components/Landing/Footer/Footer";
import { Container, Grid } from "@material-ui/core";
import { ScrollUpNav } from "../../Components/Landing/Navbar/ScrollUpNav";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <FormSelection />

      <Container maxWidth="lg">
        <Grid container>
          <div className={styles.advertImg}>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcPD2021H2/en-us/home_banner.png"
                alt=""
              />
            </Grid>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcSP20210824EUv2/en-us.png"
                alt=""
              />
            </Grid>
          </div>
        </Grid>
      </Container>

      <ScrollUpNav calcScroll="500" />
      <DestinationCarousels />
      <Footer />
    </>
  );
};
