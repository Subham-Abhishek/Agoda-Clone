import React from "react";
import "./Booking.css";
import "../CheckoutPage/Checkout.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import ConfirmModal from "./ConfirmModal";
import { AlerBox } from "./AlertBox";
import { Link } from "react-router-dom";
import { Navbar } from "../Landing/Navbar/Navbar";
import { Footer } from "../Landing/Footer/Footer";
export const BookingHistory = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [book, setBook] = React.useState(false);
  let selectedHotel = JSON.parse(localStorage.getItem("selectedHotels"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="saved">
        <h4>Booked properties list</h4>
        {book ? (
          <div className="Nothing">
            <h3>Nothing here...yet.</h3>
            <img src="empty.png" alt="" />
            <p>
              Just click on the heart icon on any property’s page and you’ll
              save it here for easy reference later.
            </p>
            <Link to="/">
              <button className="continue1">Book Hotel</button>
            </Link>
          </div>
        ) : (
          <div className="booking-holder">
            <div className="hotelcard">
              <div className="upperCard">
                <img src={selectedHotel.urlchild1} alt="" />
                <div className="detailsOf">
                  <div className="Common">
                    <h3>{selectedHotel.hotel}</h3>
                    <p>
                      Booking ID: <span>579464669</span>
                    </p>
                    <div className="BookedOn">
                      <IoCheckmarkCircleOutline
                        style={{ marginRight: 8, width: 20, height: 20 }}
                      />
                      <span>Booked on August 29, 2021</span>
                    </div>
                    <img src="superior.png" alt="" />
                  </div>
                  <div className="dateHolde">
                    <div className="checkInDat">
                      <p>CHECK IN</p>
                      <div className="sh">
                        <span>1</span>
                        <div className="day">
                          <span>Sep</span>
                          <span>Wed</span>
                        </div>
                      </div>
                    </div>
                    <div className="line1"></div>
                    <div className="checkInDat">
                      <p>CHECK OUT</p>
                      <div className="sh">
                        <span>2</span>
                        <div className="day">
                          <span>Sep</span>
                          <span>Thu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="options">
                <button className="Continue1" onClick={handleClickOpen}>
                  Cancel booking
                </button>
              </div>
            </div>
          </div>
        )}
        {open ? (
          <ConfirmModal
            setOpen1={setOpen1}
            setBook={setBook}
            open={open}
            setOpen={setOpen}
          />
        ) : null}
        {open1 ? <AlerBox open1={open1} setOpen1={setOpen1} /> : null}
      </div>
      <Footer />
    </>
  );
};
