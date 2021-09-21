import React from "react";

export const CheckoutLoading = () => {
  return (
    <div className="check-loading">
      <div className="loader-container">
        <img className="loader" src="preloader@2x_v2.gif" alt="" />
        <span class="overlay-topic">IT’S HAPPENING!</span>
        <span class="overlay-info">
          You'll be ready to pack in just a minute.
        </span>
        <p></p>
      </div>
    </div>
  );
};
