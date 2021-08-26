import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./destination.module.css";
import { TopDestinationIndia } from "./components/TopDestinationIndia";
import { TopDestinationOutsideIndia } from "./components/TopDestinationOutsideIndia";

export const DestinationCarousels = () => {
  return (
    <>
      <TopDestinationIndia />

      {/* Explore more travel vacation rentals */}

      <Typography
        style={{ textAlign: "center", marginBottom: 40 }}
        variant="h5"
      >
        Explore more travel vacation rentals
      </Typography>
      <Container maxWidth="lg">
        <Grid className={styles.rentalGrid} container>
          <Grid
            className={styles.rentalTypes}
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
          >
            <img
              className={styles.rentalImg}
              src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg"
              alt=""
            />
            <p>Apartments</p>
          </Grid>
          <Grid
            className={styles.rentalTypes}
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
          >
            <img
              className={styles.rentalImg}
              src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg"
              alt=""
            />
            <p>Vacation Rentals</p>
          </Grid>
          <Grid
            className={styles.rentalTypes}
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
          >
            <img
              className={styles.rentalImg}
              src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg"
              alt=""
            />
            <p>Private Villas</p>
          </Grid>
          <Grid
            className={styles.rentalTypes}
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
          >
            <img
              className={styles.rentalImg}
              src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg"
              alt=""
            />
            <p>Bungalows</p>
          </Grid>
        </Grid>
      </Container>

      {/* Overheard from travellers */}

      <Typography
        style={{ textAlign: "center", marginBottom: 40 }}
        variant="h5"
      >
        Overheard from travellers
      </Typography>

      <Container maxWidth="lg">
        <Grid className={styles.rentalGrid} container>
          <Grid
            className={styles.rentalTypes}
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={styles.reviews}>
              <h1>Hotel Leela International</h1>
              <p>in New Delhi</p>
              <h2>
                "We booked Hotel Leela International through Agoda after reading
                a handful of reviews, and it was easily the best decision we
                made for our trip to New delhi."
              </h2>
              <p>-Milind from Kolkata</p>
            </div>
          </Grid>
          <Grid
            className={styles.rentalTypes}
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={styles.reviews}>
              <h1>ITC Royal Bengal</h1>
              <p>in Kolkata</p>
              <h2>
                "We booked ITC Royal Bengal through Agoda after reading a
                handful of reviews, and it was easily the best decision we made
                for our trip to Kolkata."
              </h2>
              <p>-Abhishek from Delhi</p>
            </div>
          </Grid>
          <Grid
            className={styles.rentalTypes}
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={styles.reviews}>
              <h1>Hotel Taj Lands End</h1>
              <p>in Mumbai</p>
              <h2>
                "We booked Hotel Taj Lands End through Agoda after reading a
                handful of reviews, and it was easily the best decision we made
                for our trip to Mumbai."
              </h2>
              <p>-Avinash from Bihar</p>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* popular destination outside india */}

      <TopDestinationOutsideIndia />
    </>
  );
};
