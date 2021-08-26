import { Container, Typography } from "@material-ui/core";
import React from "react";
import styles from "./topDestinationOutsideIndia.module.css";
import InfiniteCarousel from "react-leaf-carousel";

export const TopDestinationOutsideIndia = () => {
  return (
    <Container className={styles.india_Dest_Cont} maxWidth="md">
      <Typography className={styles.india_dest_heading} variant="h5">
        Popular destinations outside India
      </Typography>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ]}
        showSides={true}
        sidesOpacity={0}
        // sideSize={0.1}
        slidesToScroll={6}
        slidesToShow={6}
        scrollOnDevice={true}
      >
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/17072/1_17072_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Las Vegas (NV)</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/12772/1_12772_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Los Angeles (CA)</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/10757/1_10757_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Orland (FL)</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/8683/1_8683_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Dallas (TX)</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/13899/1_13899_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Chicago (IL)</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/318/1_318_02.jpg?s=345x345&ar=1x1"
          />
          <h4>New York</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/11304/1_11304_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Goa</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/8845/1_8845_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Jaipur</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/16854/1_16854_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Pune</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/21075/1_21075_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Lonavala</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/12565/1_12565_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Pondicherry</h4>
        </div>
        <div className={styles.carouselItems}>
          <img
            className={styles.carouselImg}
            alt=""
            src="https://pix6.agoda.net/geo/city/3667/1_3667_02.jpg?s=345x345&ar=1x1"
          />
          <h4>Udaipur</h4>
        </div>
      </InfiniteCarousel>
    </Container>
  );
};
