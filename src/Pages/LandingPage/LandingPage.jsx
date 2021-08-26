import React from "react";
import styles from "./landingPage.module.css"
import { FormSelection } from "../../Components/Landing/FormSelection/FormSelection";
import { Navbar } from "../../Components/Landing/Navbar/Navbar";
import { DestinationCarousels } from "../../Components/Landing/DestinationCarousels/DestinationCarousels";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <FormSelection />
      <img className={styles.advertImg} src="https://cdn6.agoda.net/images/WebCampaign/wcSP20210824EUv2/en-us.png" alt="" />
      <DestinationCarousels />
    </>
  );
};
