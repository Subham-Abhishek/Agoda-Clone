import React from "react";

export const ConfirmLoading = ({ setRemind }) => {
  return (
    <div className="check-loading">
      <div className="loader-container2">
        <img className="remind-loader" src="remind.png" alt="" />
        <span class="remind-topic">You're almost done!</span>
        <span class="remind-info">
          <span className="important">Our last room for your dates! </span>
          if you leave now, we can't hold this room and rate for you.
        </span>
        <button onClick={() => setRemind(false)} className="continue">
          Continue booking
        </button>
      </div>
    </div>
  );
};
