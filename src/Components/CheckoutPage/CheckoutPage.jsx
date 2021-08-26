import React, { useEffect, useState } from "react";
import "../Authorization/Auth-page.css";
import "./Checkout.css"
import { CheckoutLoading } from "./CheckoutLoading";
import { ConfirmLoading } from "./ConfirmLoading";
import { ProgressBar, Step } from "react-step-progress-bar";
import { FaCheck} from "react-icons/fa";
import CountdownTimer from "react-component-countdown-timer";
import { Timer } from "./Timer";

export const CheckoutPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isremind, setRemind] = useState(false);
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

 

  return isLoading ? (
    <CheckoutLoading />
  ) : (
    <div className="checkout-Wrapper">
      <nav>
        <img src="agoda-logo.png" alt="" />
        <div className="progress">
          <div className="progress-bar">
            <div className="step1">
              <span className={step1?"sub-active":"sub-deactive"} >1</span>
              <div className={step1?"progress-info-active":"progress-info-deactive"}>Customer information</div>
            </div>
            <div className="step2">
              <span className={step2?"sub-active":"sub-deactive"} >2</span>
              <div className={step2?"progress-info-active":"progress-info-deactive"}>Payment information</div>
            </div>
            <div className="step3">
              <span className={step3?"sub-active":"sub-deactive"}><FaCheck style={{width:8}}/></span>
              <div className={step3?"progress-info-active":"progress-info-deactive"}>Booking is confirmed</div>
            </div>
          </div>
        </div>
      </nav>
      
      <div className='checkout-container'>
        <div className="userInfo">
        <Timer/>
       
        </div>
        <div className="hotel-detail"></div>
      </div>
    </div>
  );
};
