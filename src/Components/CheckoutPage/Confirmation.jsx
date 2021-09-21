import { Link } from "react-router-dom";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import "./Checkout.css";
export const Confirmation = () => {
  return (
    <div className="thanks">
      <div className="bluebar"></div>
      <h3>Thank you Subham Abhishek. Your booking is now complete!</h3>
      <div className="features">
        <FcCheckmark style={{ fontSize: 20 }} />
        <span>
          You chose to pay the property directly. Agoda will not charge your
          credit card.
        </span>
      </div>
      <div className="features">
        <FcCheckmark style={{ fontSize: 20 }} />
        <span>
          In the next 10 minutes you’ll receive an email containing your booking
          details and Entire apartment voucher/s.
        </span>
      </div>
      <div className="features">
        <FcCheckmark style={{ fontSize: 20 }} />
        <span>Your Booking ID is 579836625</span>
      </div>
      <div className="features">
        <FcCheckmark style={{ fontSize: 20 }} />
        <span>
          In the next 10 minutes you will receive a booking confirmation with
          booking details in your inbox at
          <span className="great1"> saj@gmail.com</span>
        </span>
      </div>
      <div className="features">
        <FcCheckmark style={{ fontSize: 20 }} />
        <span>Please present this confirmation at check-in.</span>
      </div>
      <Link to="/">
        <button className="bookAnother">Book another room</button>
      </Link>
      <Link to="/bookings">
        <button className="bookAnother1">Manage my bookings</button>
      </Link>
    </div>
  );
};
