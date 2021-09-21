import React from "react";
import "./Checkout.css";
import { ImLocation2 } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { IoPeopleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";

export const HotelDetails = ({ selectedHotel }) => {
  const [isHover, setHover] = useState(false);
  return (
    <>
      <div className="hotelInfo">
        <div className="hotel-img">
          <img src={selectedHotel.urlchild4} alt="" />
        </div>
        <div className="hotelDetails">
          <div className="best">Best Seller</div>
          <div className="hotelName">{selectedHotel.hotel}</div>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <p className="addre">{selectedHotel.direction}</p>
          <div className="exellent">
            <ImLocation2 style={{ width: 20, height: 15 }} />
            <span>Excellent location</span>
            <span className="exellent1">- What's nearby?</span>
          </div>
        </div>
      </div>
      <div className="hotelInfo1">
        <div className="dateHolder">
          <span>1 Sep 2021 - 2 Sep 2021</span>
          <span>1 night</span>
        </div>
        <div className="quantity">1 x Superior Room</div>
        <div className="ratingHolder">
          <div className="ratingBox">{selectedHotel.rating}</div>
          <div className="rev">
            <div>Excellent cleanliness</div>
            <div>From {selectedHotel.reviews} reviews</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="roomNumber">
          <IoPersonOutline />
          <span>1 room, 1 adult</span>
        </div>
        <div className="roomNumber">
          <IoPeopleOutline />
          <span>Max 1 adult</span>
        </div>
        <div className="line"></div>
        <span className="great1" style={{ fontSize: 14 }}>
          RISK FREE cancellation before 23:59 hrs. on 01 September 2021
          (property local time)
        </span>
      </div>

      <div className="Hurry">
        <span className="redbar"></span>
        <img src="Timer.png" alt="" />
        <div className="hurryInfo">
          <p className="hurryUp">
            Hurry! Our last room for your dates at this price
          </p>
          <span className="hurryUp1">It's only</span>
          <span className="hurryUp">2</span>
          <span className="hurryUp1">days untill your check-in.</span>
          <span className="hurryUp">Rates may rise if you don’t book now.</span>
        </div>
      </div>

      <div className="PriceHolder">
        <div className="PriceInfo">
          <div>
            <span>Price(1 room x 1 night)</span>
            <span>Rs. {selectedHotel.price}</span>
          </div>
          <div style={{ marginTop: 20 }}>
            <span>Booking fees</span>
            <span style={{ color: "rgb(72,139,248)", fontWeight: 500 }}>
              FREE
            </span>
          </div>
        </div>
        <div className="dateHolder1">
          <div className="it">
            <span>Price</span>
            <div
              className="moreInfo"
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              <FcInfo style={{ cursor: "pointer" }} />
              <div
                className={`pricePolicy ${isHover ? "activePo" : "deactive"}`}
              >
                <h4>Hotel tax and services fees</h4>
                <p>
                  Taxes and service fees are generally recovery charges which
                  Agoda pays to the vendor or which are collected by the vendor.
                  For more details, please see the Agoda Terms of Use. Tax and
                  service fees may also contain fees that Agoda retains as
                  compensation for processing the reservation.
                </p>
              </div>
            </div>
          </div>
          <span>Rs. {selectedHotel.price + 644.76}</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 500, marginLeft: 12 }}>
          Included in price:
        </span>
        <span style={{ fontSize: 12 }}>
          Hotel tax and service fees Rs. 644.76
        </span>
      </div>
    </>
  );
};
