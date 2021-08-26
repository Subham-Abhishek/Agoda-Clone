import React, { useEffect, useState } from "react";
import "../Authorization/Auth-page.css";
import "./Checkout.css";
import { CheckoutLoading } from "./CheckoutLoading";
import { ConfirmLoading } from "./ConfirmLoading";
import { ProgressBar, Step } from "react-step-progress-bar";
import { FaCheck } from "react-icons/fa";
import { Timer } from "./Timer";

let x = 0

export const CheckoutPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isremind, setRemind] = useState(false);
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    setLoading(false);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    let timer2 = setTimeout(() => {
      setRemind(false);
    }, 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  
  const handleNext = () => {
    setStep2(true)
    x++
    if(x==2)
    setStep3(true)

  }

  return isLoading ? (
    <CheckoutLoading />
  ) : (
    <div className="checkout-Wrapper">
      <nav>
        <img src="agoda-logo.png" alt="" />
        <div className="progress">
          <div className="progress-bar">
            <div className="step1">
              <span className={step1 ? "sub-active" : "sub-deactive"}>1</span>
              <div
                className={
                  step1 ? "progress-info-active" : "progress-info-deactive"
                }
              >
                Customer information
              </div>
            </div>
            <div className="step2">
              <span className={step2 ? "sub-active" : "sub-deactive"}>2</span>
              <div
                className={
                  step2 ? "progress-info-active" : "progress-info-deactive"
                }
              >
                Payment information
              </div>
            </div>
            <div className="step3">
              <span className={step3 ? "sub-active" : "sub-deactive"}>
                <FaCheck style={{ width: 8 }} />
              </span>
              <div
                className={
                  step3 ? "progress-info-active" : "progress-info-deactive"
                }
              >
                Booking is confirmed
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="checkout-container">
        <div className="userInfo">
          <div className="advice">
            <span className="greenBar"></span>
            <span className="tik">
              <svg width="14px" height="14px" viewBox="0 0 24 24">
                <path
                  fill="rgb(50, 169, 35)"
                  id="check-valid-state_24px-a"
                  d="M1.146 4.353a.5.5 0 1 1 .708-.706l15.699 15.731a.5.5 0 0 0 .7.008l3.718-3.578a.5.5 0 1 1 .693.72l-3.717 3.578a1.5 1.5 0 0 1-2.102-.021L1.146 4.353z"
                ></path>

                <use transform="matrix(-1 0 0 1 23.817 0)"></use>
              </svg>
            </span>
            <span className="great">Great choice of property</span>
            <span className="average"> - with an average guest rating of </span>
            <span className="great"> 8.2 </span>
            <span className="average"> from 375 reviews</span>
          </div>

          <div className="form-container">
            <div className="time-holder">
              <div className="timehold">
                <span className="holding">Holding Pricing...</span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  enable-background="new 0 54 500 500"
                >
                  <path
                    fill="rgb(57,111,198)"
                    d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5zm0-2a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zM11.5 6a1 1 0 0 1 2 0v7.08a1 1 0 0 1-.262.675l-3.5 3.83a1 1 0 1 1-1.476-1.35l3.238-3.543V6z"
                  ></path>
                </svg>
                <Timer />
                <button className="continue">I need more time</button>
              </div>
            </div>
            <h4>Let us know who are you</h4>
            <div className="input-container">
              <label htmlFor="">Full name</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Retype email</label>
              <input type="text" />
            </div>
            <div className="divide">
              <div className="input-container">
                <label htmlFor="">Phone number</label>
                <input type="text" />
              </div>{" "}
              <div className="input-container">
                <label htmlFor="">Country/region</label>
                <div className="inp">
                  India
                  <span className="tik">
                    <svg width="14px" height="14px" viewBox="0 0 24 24">
                      <path
                        fill="rgb(50, 169, 35)"
                        id="check-valid-state_24px-a"
                        d="M1.146 4.353a.5.5 0 1 1 .708-.706l15.699 15.731a.5.5 0 0 0 .7.008l3.718-3.578a.5.5 0 1 1 .693.72l-3.717 3.578a1.5 1.5 0 0 1-2.102-.021L1.146 4.353z"
                      ></path>

                      <use transform="matrix(-1 0 0 1 23.817 0)"></use>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <h4 style={{ marginBottom: 15 }}>Let us know what you need</h4>
            <label style={{ marginLeft: 20 }}>
              Requests are fulfilled on a first come, first served basis. We'll
              send yours right after you book.
            </label>
            <div className="preference">
              <div className="question">
                <label htmlFor="" style={{ display: "block" }}>
                  Do you have a smoking preference?
                </label>
                <input type="radio" className="check" />
                <label htmlFor="">Non-smoking</label>
                <input type="radio" className="check" />
                <label htmlFor="">Smoking</label>
              </div>
              <div className="question">
                <label htmlFor="" style={{ display: "block" }}>
                  What bed configuration do you prefer?
                </label>
                <input type="radio" className="check" />
                <label htmlFor="">I'd like a large beb</label>
                <input type="radio" className="check" />
                <label htmlFor="">I'd like twin beds</label>
              </div>
            </div>
            <div className="policy">
            By proceeding with this booking, I agree to Agoda’s <span className="clickable">Terms of Use</span> and <span className="clickable">Privacy Policy.</span>
            </div>
            <div className="next">
              <label htmlFor="">Hurry! Our last room for your dates at this price
</label>
              <button onClick={handleNext} className="next-page">NEXT PAGE</button>
            </div>
          </div>
        </div>
        <div className="hotel-detail"></div>
      </div>
      {isremind && <ConfirmLoading setRemind={setRemind} />}
    </div>
  );
};
