import { Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styles from "./topDestinationIndia.module.css";
import InfiniteCarousel from "react-leaf-carousel";
import { AppContext } from "../../../../context/Provider";
import { Link } from "react-router-dom";

export const TopDestinationIndia = () => {
  const { setSearchedCity } = useContext(AppContext);

  return (
    <Container className={styles.india_Dest_Cont} maxWidth="md">
      <Typography className={styles.india_dest_heading} variant="h5">
        Top destinations in India
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
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Mumbai")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Mumbai</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("New Delhi")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?s=345x345&ar=1x1"
            />
            <h4>New Delhi</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Kolkata")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Kolkata</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Bangalore")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Bangalore</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Chennai")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Chennai</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Hyderabad")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Hyderabad</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Goa")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/11304/1_11304_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Goa</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Jaipur")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/8845/1_8845_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Jaipur</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Pune")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/16854/1_16854_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Pune</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Lonavala")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/21075/1_21075_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Lonavala</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Pondicherry")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/12565/1_12565_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Pondicherry</h4>
          </div>
        </Link>
        <Link to="/hotel">
          <div
            onClick={() => setSearchedCity("Udaipur")}
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://pix6.agoda.net/geo/city/3667/1_3667_02.jpg?s=345x345&ar=1x1"
            />
            <h4>Udaipur</h4>
          </div>
        </Link>
      </InfiniteCarousel>
    </Container>
  );
};
