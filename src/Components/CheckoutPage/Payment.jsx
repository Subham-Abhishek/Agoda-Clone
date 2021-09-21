/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Checkout.css";
import { FcCheckmark, FcLock } from "react-icons/fc";
import GooglePayButton from "@google-pay/button-react";
import { Timer } from "./Timer";
import { Confirmation } from "./Confirmation";
export const Payment = ({ step3, setStep3, selectedHotel }) => {
  return (
    <>
      <div className="userInfo">
        <div
          className="form-container"
          style={{ background: "rgb(249,249,250)" }}
        >
          {!step3 ? (
            <>
              <div className="time-holder">
                <div className="timehold" style={{ marginTop: "12px" }}>
                  <span className="holding">Holding Pricing...</span>
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    enable-background="new 0 54 500 500"
                  >
                    <path
                      fill="rgb(57,111,198)"
                      d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5zm0-2a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zM11.5 6a1 1 0 0 1 2 0v7.08a1 1 0 0 1-.262.675l-3.5 3.83a1 1 0 1 1-1.476-1.35l3.238-3.543V6z"
                    ></path>
                  </svg>
                  <Timer />
                </div>
              </div>
              <div className="security">
                <FcLock style={{ marginLeft: 12, width: 25, height: 25 }} />
                <span>Secure Payment</span>
                <span className="Vline"></span>
                <span>
                  All card information is fully encrypted, secure, and
                  protected.
                </span>
              </div>
              <div className="paymentsHolder">
                <div className="paymentInfo">
                  <input type="radio" checked />
                  <span>DIGITAL PAYMENT</span>
                  <img src="gpay.png" alt="" />
                </div>
                <div className="paymentOptions">
                  <p>Select payment method</p>
                  <div className="gpayHolder">
                    <img src="gpay.png" alt="" />
                    <span>GPay</span>
                    <FcCheckmark style={{ marginLeft: 150 }} />
                  </div>
                  <ul>
                    <li>
                      You have chosen to pay by <strong>GPay</strong>. You will
                      be forwarded to the <strong>GPay</strong> website to
                      proceed with this transaction.
                    </li>
                    <li>
                      The total amount you will be charged is: ₹{" "}
                      {selectedHotel.price + 644.76}
                    </li>
                  </ul>
                </div>
              </div>
              <p className="proceed">
                By proceeding, I agree to <a href="#">Agoda’s Terms</a> of Use
                and acknowledge their <a href="#">Privacy Policy</a>.
              </p>
              <div className="click">
                <GooglePayButton
                  environment="TEST"
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: "CARD",
                        parameters: {
                          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                          allowedCardNetworks: ["MASTERCARD", "VISA"],
                        },
                        tokenizationSpecification: {
                          type: "PAYMENT_GATEWAY",
                          parameters: {
                            gateway: "example",
                            gatewayMerchantId: "exampleGatewayMerchantId",
                          },
                        },
                      },
                    ],
                    merchantInfo: {
                      merchantId: "12345678901234567890",
                      merchantName: "Demo Merchant",
                    },
                    transactionInfo: {
                      totalPriceStatus: "FINAL",
                      totalPriceLabel: "Total",
                      totalPrice: `${selectedHotel.price + 644.76}`,
                      currencyCode: "INR",
                      countryCode: "IN",
                    },
                    shippingAddressRequired: true,
                    callbackIntents: [
                      "SHIPPING_ADDRESS",
                      "PAYMENT_AUTHORIZATION",
                    ],
                  }}
                  onLoadPaymentData={(paymentRequest) => {
                    console.log("Success", paymentRequest);
                  }}
                  onPaymentAuthorized={(paymentData) => {
                    console.log("Payment Authorised Success", paymentData);
                    setStep3(true);

                    return { transactionState: "SUCCESS" };
                  }}
                  onPaymentDataChanged={(paymentData) => {
                    console.log("On Payment Data Changed", paymentData);
                    return {};
                  }}
                  existingPaymentMethodRequired="false"
                  buttonColor="black"
                  buttonType="Buy"
                />
              </div>
            </>
          ) : (
            <Confirmation />
          )}
        </div>
      </div>
    </>
  );
};
