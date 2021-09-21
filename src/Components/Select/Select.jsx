/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import styles from "./Select.module.css";
import { Comment } from "../Comment/Comments";
import { useEffect } from "react";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Capture from "../Store/Capture.jpeg";
import Fade from "@material-ui/core/Fade";
import { Loading } from "../Loading/Loading";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Landing/Navbar/Navbar";
import { Footer } from "../Landing/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));
// const useStyles1 = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

function Select() {
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [heart, setHeart] = useState(false);
  const [, setRend] = useState(false);
  const [src, setSrc] = useState(
    "https://www.vhv.rs/dpng/d/529-5293892_grey-instagram-heart-png-transparent-png.png"
  );
  // const [map, setMap] = useState(false)
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const location = useLocation;
  console.log(location);

  const { id } = useParams();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    axios
      .get(`https://agoda-api.herokuapp.com/hotel/${id}`)

      .then((res) => {
        console.log("getIdusers", res.data);
        setUser(res.data);
        setRend(true);
        localStorage.setItem("selectedHotels", JSON.stringify(res.data));
      })
      .catch((err) => {})
      .finally(() => {
        console.log("users", user);
      });
  };

  console.log("usersHotelDeatils", user);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id1 = open ? "simple-popper" : undefined;

  window.onscroll = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleHeart = () => {
    setHeart(!heart);
    if (heart === true) {
      setSrc(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00CCWYmn-k9O992A39x3DE-tNG3KdBy786W8tlR33wdluNzn7Q9SKWwBeoZln56A3_78&usqp=CAU"
      );
    } else {
      setSrc(
        "https://www.vhv.rs/dpng/d/529-5293892_grey-instagram-heart-png-transparent-png.png"
      );
    }
  };

  return (
    <>
      {loading && <Navbar />}
      {loading ? (
        <div>
          {navbar && (
            <div className={styles.navbarmaindiv}>
              <div className={styles.navbarmaindivdiv1}>
                <button
                  onClick={() => {
                    window.scrollTo(0, 88);
                  }}
                >
                  Rooms
                </button>
                <button
                  onClick={() => {
                    window.scrollTo(0, 1590);
                  }}
                >
                  Facilities
                </button>
                <button
                  onClick={() => {
                    window.scrollTo(0, 2268);
                  }}
                >
                  Reviews
                </button>
                <button
                  onClick={() => {
                    window.scrollTo(0, 1762);
                  }}
                >
                  Frequently Asked Questions
                </button>
                <button
                  onClick={() => {
                    window.scrollTo(0, 6434);
                  }}
                >
                  Map
                </button>
                <button
                  onClick={() => {
                    window.scrollTo(0, 2434);
                  }}
                >
                  Check In
                </button>
                {/* <button onClick={() => { window.scrollTo(0, 0); }}> Top <i className="fas fa-arrow-up" ></i> </button> */}
              </div>
              <div className={styles.navbarmaindivdiv2}>
                <div className={styles.navbarmaindivdiv2div1}>
                  <h6>The cheapest price </h6>
                  <h3>
                    <span style={{ fontSize: "12px" }}>Rs.</span>
                    {user.price}
                  </h3>
                </div>

                <button>
                  <h3
                    onClick={() => {
                      window.scrollTo(0, 1088);
                    }}
                  >
                    VIEW THIS DEAL
                  </h3>
                </button>
                <p
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Back To Top
                  <span>
                    {" "}
                    <i class="fas fa-arrow-up"></i>
                  </span>
                </p>
              </div>
            </div>
          )}
          <div className={styles.selectMainDiv}>
            <div className={styles.upperdiv}>
              <div className={styles.selectUpperDiv}>
                <div className={styles.selectUpperDivImage}>
                  <img
                    src={user.url}
                    alt="image1"
                    className={styles.selectBigimage}
                  />
                  <div className={styles.selectUpperDivdiv}>
                    <div className={styles.upperdivPosition}>
                      <p>from</p>
                      <p>
                        Rs. <span>{user.price}</span>
                      </p>
                    </div>
                    <div className={styles.upperdivPosition2}>
                      <p>54%</p>
                      <p>Discount</p>
                    </div>
                  </div>
                  <h4 className={styles.selectupperh1}>
                    "Great place to live."
                    <br />
                    <br />
                    <p>Sandeep - January 5 2020</p>
                  </h4>
                  <div className={styles.selectUpperDivImage2}>
                    <img
                      src={user.urlchild1}
                      alt="images"
                      className={styles.upperImage2}
                    />
                    <div className={styles.selectDivFlexUpper}>
                      <img src={user.urlchild2} alt="images" />
                      <img src={user.urlchild3} alt="images" />
                      <h5 className={styles.selectseeallphotos}>
                        SEE ALL PHOTOS
                      </h5>
                    </div>
                    <div className={styles.selectHeart} onClick={handleHeart}>
                      <img
                        src={src}
                        alt="heart"
                        className={styles.heartImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.selectHoteldetails}>
                  <div className={styles.selectHotelbutton}>
                    <button>Best Seller</button>
                    <button>Free Wi-Fi</button>
                    <button>Genius</button>
                  </div>
                  <h1>
                    {user.hotel}
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </h1>
                  <p>
                    Hospitality District, Indira Gandhi Int'l Airport, New Delhi
                    and NCR, India, 110037
                  </p>
                </div>
                <div className={styles.highDemand}>
                  <img
                    src="https://cdn6.agoda.net/images/MIN-13785/default/VELX-972-banner-popular.gif"
                    alt="popularImage"
                  />
                  <div className={styles.highDemandimgdiv}>
                    <p className={styles.highDemandimgdivspan1}>
                      This property is in high demand!
                    </p>
                    <p className={styles.highDemandimgdivspan2}>
                      5 travelers have booked today.
                    </p>
                  </div>
                </div>
                <div className={styles.selectHotelmeans}>
                  <div>
                    <i className="fas fa-subway"></i>
                    <i className="fas fa-car"></i>
                    <i className="fas fa-wifi"></i>
                    <i className="fas fa-map-marker-alt"></i>
                    <i className="fas fa-brush"></i>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>320 meters to public transportation </p>
                    <p>Airport transport</p>
                    <p>Located in heart of New Delhi and NCR </p>
                    <p>Free Wi-Fi in all rooms!</p>
                    <p>Daily housekeeping</p>
                  </div>
                </div>
              </div>

              <div className={styles.selectrating}>
                <div className={styles.selectratingdiv1}>
                  <div className={styles.selectRatingDiv}>
                    <div
                      className={styles.selectRatingDiv1}
                      aria-describedby={id1}
                      type="button"
                      onMouseEnter={handleClick}
                      onMouseLeave={handleClick}
                    >
                      <span>
                        <h2>{user.rating}</h2>
                      </span>

                      <Popper
                        id={id1}
                        open={open}
                        anchorEl={anchorEl}
                        transition
                      >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={350}>
                            <div className={classes.paper}>
                              <div className={styles.selectRatingModal}>
                                <h4>
                                  Based on{" "}
                                  <span style={{ color: "#5392f9" }}>
                                    {" "}
                                    {user.reviews}{" "}
                                  </span>{" "}
                                  verified reviews
                                </h4>
                                <div className={styles.RatingModalDivs}>
                                  <div>
                                    <p>9 + Exceptional</p>
                                  </div>
                                  <div className={styles.RatingBlueDiv}>
                                    <div></div>
                                  </div>
                                  <div>
                                    <span>221</span>
                                  </div>
                                </div>
                                <div className={styles.RatingModalDivs1}>
                                  <div>
                                    <p>8-9 Excellent</p>
                                  </div>
                                  <div className={styles.RatingBlueDiv1}>
                                    <div></div>
                                  </div>
                                  <div>
                                    <span>214</span>
                                  </div>
                                </div>
                                <div className={styles.RatingModalDivs2}>
                                  <div>
                                    <p>7-8 Very Good</p>
                                  </div>
                                  <div className={styles.RatingBlueDiv2}>
                                    <div></div>
                                  </div>
                                  <div>
                                    <span>84</span>
                                  </div>
                                </div>
                                <div className={styles.RatingModalDivs3}>
                                  <div>
                                    <p>6-7 Good</p>
                                  </div>
                                  <div className={styles.RatingBlueDiv3}>
                                    <div></div>
                                  </div>
                                  <div>
                                    <span>87</span>
                                  </div>
                                </div>
                                <div className={styles.RatingModalDivs4}>
                                  <div>
                                    <p>{"<"}6 Below Expectation</p>
                                  </div>
                                  <div className={styles.RatingBlueDiv4}>
                                    <div></div>
                                  </div>
                                  <div>
                                    <span>124</span>
                                  </div>
                                </div>
                                <button
                                  className={styles.RatingModalButton}
                                  onClick={() => {
                                    window.scrollTo(0, 2312);
                                  }}
                                >
                                  Read All Reviews
                                </button>
                              </div>
                            </div>
                          </Fade>
                        )}
                      </Popper>
                    </div>
                    <div className={styles.selectmodaldivright}>
                      <h3>Very Good</h3>
                      <h6>/({user.reviews} reviews)</h6>
                    </div>
                  </div>
                  <div className={styles.selectRatingdivs}>
                    <p>
                      {" "}
                      <span>Housekeeping </span>35
                      <i className="fas fa-thumbs-up"></i>
                    </p>
                  </div>
                  <div className={styles.selectRatingdivs}>
                    <p>
                      {" "}
                      <span>Breakfast </span> 16
                      <i className="fas fa-thumbs-up"></i>
                    </p>
                  </div>
                  <div className={styles.selectRatingdivs}>
                    <p>
                      <span>Food & Dining </span> 7
                      <i className="fas fa-thumbs-up"></i>
                    </p>
                  </div>
                </div>
                <div className={styles.mapImage}>
                  <div className={styles.mapImageimage}>
                    <Link to={"/map"}>
                      <img
                        src="https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg"
                        alt="map"
                      />
                    </Link>
                  </div>
                  <div className={styles.mapImageupdiv}>
                    <div className={styles.mapImageupdivdiv1}>
                      <h3
                        style={{ color: "rgb(0, 76, 184)", marginLeft: "2px" }}
                      >
                        8.7
                      </h3>
                    </div>
                    <div className={styles.mapImageupdivdiv2}>
                      <h5>Excellent</h5>
                      <p>Location Rating Score</p>
                    </div>
                  </div>
                  <h4 className={styles.mapImageh4}>
                    <i className="fas fa-award"></i>Excellent location
                  </h4>
                  <h4 className={styles.mapImageh42}>
                    <i className="fas fa-building"></i>Popular Neighbourhood
                  </h4>
                  <div className={styles.selectmapDiv}>
                    <p>
                      <i class="fas fa-car"></i>Parking{" "}
                    </p>
                    <p>Free</p>
                  </div>
                  <h5 style={{ marginLeft: "20px" }}>Popular Landmarks</h5>
                  <div className={styles.selectlandmarksdiv}>
                    <div className={styles.selectQutub}>
                      <p>Qutub Minar</p>
                      <p>6.9 KM</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>Lodhi Garden</p>
                      <p>11.9 KM</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>Gurudrawa Sahib</p>
                      <p>10.7 KM</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>India gate</p>
                      <p>3.7 KM</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>Red Fort</p>
                      <p>9.0</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>Cannaught place</p>
                      <p>6.9 KM</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>Cannaught place</p>
                      <p>6.9 KM</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>Cannaught place</p>
                      <p>6.9 KM</p>
                    </div>
                    <div className={styles.selectQutub}>
                      <p>Cannaught place</p>
                      <p>6.9 KM</p>
                    </div>
                  </div>
                  <div className={styles.selectmapImagelastDiv}>
                    <h5>Select Nearby Places</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.selectpopulardates}>
              <div className={styles.selectpopulardatesimg}>
                <img
                  src="	https://cdn6.agoda.net/images/MIN-17619/yellow-icon.svg"
                  alt="popularImage"
                />
                <div className={styles.selectpopulardatesimgdiv}>
                  <p className={styles.selectpopulardatesimgdivspan1}>
                    Your dates are popular among travelers
                  </p>
                  <p className={styles.selectpopulardatesimgdivspan2}>
                    Users are booking a place in
                    <span className={styles.selectpopulardatesimgdivspan1}>
                      {" "}
                      New Delhi and NCR{" "}
                    </span>
                    every 1 minutes on Agoda.com
                  </p>
                </div>
              </div>
            </div>

            <h2 className={styles.selectsyr}>Select your room</h2>
            <hr className={styles.commenthr} />
            <h4>
              Take a look at these facilities:
              <span className={styles.selectinstantconfirm}>
                <i className="far fa-check-circle"></i>Instant confirmation
              </span>
            </h4>
            <div className={styles.selectfitness}>
              <span>
                <i className="fas fa-dumbbell"></i> Fitnees center
              </span>

              <span>
                <i className="fas fa-utensils"></i> Resturants
              </span>
            </div>
            <div className={styles.selectsqr}>
              <span className={styles.selectsqrt}>Standard Queen Room</span>
              <br />
              <span className={styles.selectsqrt1}>
                Last Booked 6 Hours Ago
              </span>
              <div className={styles.selectinnerdiv}>
                <div className={styles.selectinnerdiv1}>
                  <img src={user.urlchild1} alt="standardqueen" />
                  <p className={styles.selectinnerdivp1}>
                    Room photos and details
                  </p>
                  <p
                    style={{ color: "rgb(133, 193, 80)" }}
                    className={styles.facilitiesrightDiv}
                  >
                    <i className="fas fa-wifi"> </i> Free Wi-Fi
                  </p>
                  <p className={styles.facilitiesrightDiv}>
                    {" "}
                    <i className="fas fa-bed"></i> 1 Queen bed
                  </p>
                  <p className={styles.facilitiesrightDiv}>
                    {" "}
                    <i className="fas fa-restroom"></i> Room size: 19 m²/205 ft²
                  </p>
                  <p className={styles.facilitiesrightDiv}>
                    <i className="fas fa-bath"></i> Shower
                  </p>
                </div>
                <div className={styles.selectinnerdiv2}>
                  <div className={styles.selectinnerdivs}>Benefits</div>
                  <span>Your price includes:</span>
                  <p className={styles.selectsqrp}>
                    <i className="fas fa-check"></i> Pay nothing until August
                    31, 2021
                  </p>
                  <p className={styles.selectsqrp}>
                    <i className="fas fa-check"></i> Free Wi-fi
                  </p>
                  <p className={styles.selectsqrp}>
                    <i className="fas fa-check"></i>Free cancellation before
                    September 2, 2021
                  </p>
                  <p className={styles.selectsqrp}>
                    <i className="fas fa-check"></i>Free cancellation before
                    August 31, 2021
                  </p>
                </div>
                <div className={styles.selectinnerdiv3}>
                  <div className={styles.selectinnerdivs}>Sleeps</div>
                  <i className="fas fa-restroom"></i>
                </div>
                <div className={styles.selectinnerdiv4}>
                  <div className={styles.selectinnerdivs}>Price per night</div>
                  <div className={styles.priceernightdiv1}>
                    <h6>SAVE 54% TODAY!</h6>
                  </div>
                  <div className={styles.priceernightdiv2}>
                    <p>Last Minute Price Drop</p>
                  </div>
                  <div className={styles.priceernightdiv3}>
                    <p>CHEAPEST PRICE YOU'VE SEEN!</p>
                  </div>
                  <h4
                    style={{
                      color: "red",
                      padding: "10px",
                      textAlign: "right",
                    }}
                  >
                    Rs. {user.price}
                  </h4>
                </div>
                <div className={styles.selectinnerdiv5}>
                  <div className={styles.selectinnerdivs}>Rooms</div>
                  <select className={styles.selectsquare}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className={styles.selectinnerdiv6}>
                  <div className={styles.selectinnerdivs}>Most Booked</div>
                  <Link to="/checkout">
                    <button className={styles.selectinnerbutton}>
                      Reserve
                    </button>
                  </Link>
                  <div className={styles.selectreservediv}>
                    <h5 style={{ textAlign: "center", lineHeight: "16px" }}>
                      No risk! <br />
                      <h5>No canceletion Fee</h5>
                    </h5>
                  </div>
                  <h5 style={{ color: "rgb(54,182,139)", textAlign: "center" }}>
                    Limited Availaibility
                  </h5>
                </div>
              </div>
            </div>

            <div className={styles.selectFacilities}>
              <div className={styles.selectFacilitiesdiv1}>
                <h4> Most talked about facilities</h4>
              </div>
              <div className={styles.selectFacilitiesdiv2}>
                <div className={styles.selectFacidiv2divs}>
                  <i className="fas fa-utensils"></i>
                  <p>Food & Dining</p>
                  <span>18 mentions</span>
                </div>
                <div className={styles.selectFacidiv2divs}>
                  <i className="fas fa-broom"></i>
                  <p>Housekeeping</p>
                  <span>29 mentions</span>
                </div>
                <div className={styles.selectFacidiv2divs}>
                  <i className="fas fa-coffee"></i>
                  <p>Breakfast</p>
                  <span>38 mentions</span>
                </div>
                <div className={styles.selectFacidiv2divs}>
                  <i className="fas fa-taxi" style={{ marginLeft: "67px" }}></i>
                  <p>Taxi </p>
                  <span>19 mentions</span>
                </div>
              </div>
            </div>

            <h1 className={styles.selectfaqh1}>Frequently asked questions</h1>
            <div className={styles.selectfaqiv1}>
              <div className={styles.faqdivdiv1}>
                <Accordion className={styles.selectAccordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.selectaccodionsummary}
                  >
                    <Typography className={classes.heading}>
                      What time is check-in and check-out at Red Fox Hotel Delhi
                      Airport?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ fontSize: "13.6px" }}>
                      Check-in is from 02:00 PM, and check-out is until 12:00
                      PM. You may request early check-in or late check-out
                      during booking, subject to availability. Guests checking
                      in or out before or after the designated periods may be
                      charged an additional fee. The hotel offers luggage
                      storage to guests for before check-in and after check-out.
                      The front desk is always open, day or night.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.selectAccordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={styles.selectaccodionsummary}
                  >
                    <Typography className={classes.heading}>
                      How do I get to Red Fox Hotel Delhi Airport?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ fontSize: "13.6px" }}>
                      Red Fox Hotel Delhi Airport is easy to access from the
                      airport. In fact, you can even book your airport transfer
                      in advance for greater peace of mind with the additional
                      charge of 2000 INR. Just use the "Let us know what you
                      need" section of the booking page to let the hotel know
                      you want a ride, and they will contact you via the Agoda
                      messaging service. A stay at Red Fox Hotel Delhi Airport
                      also comes with easy access to the neighborhoods around
                      the hotel through the convenient shuttle service offered
                      at the hotel. For those who wish to drive their own cars,
                      Red Fox Hotel Delhi Airport has a car park right on site
                      for maximum convenience. Parking is free for guests.
                      Parking options include a full-service valet for total
                      ease. If you're looking for an easy way to get around New
                      Delhi and NCR with private transportation, the hotel can
                      arrange both taxis or car rental.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.selectAccordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={styles.selectaccodionsummary}
                  >
                    <Typography className={classes.heading}>
                      Is breakfast offered at Red Fox Hotel Delhi Airport?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ fontSize: "13.6px" }}>
                      Start your mornings right, with the continental and buffet
                      breakfast options offered at Red Fox Hotel Delhi Airport.
                      Adults can enjoy breakfast offered with an additional
                      charge of 490 INR if not included in the room rate. You
                      may save on breakfast costs with Agoda by booking a room
                      with breakfast, which is often included for less than
                      buying it at the hotel.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.selectAccordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={styles.selectaccodionsummary}
                  >
                    <Typography className={classes.heading}>
                      What are my dining options at Red Fox Hotel Delhi Airport?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ fontSize: "13.6px" }}>
                      Red Fox Hotel Delhi Airport features an on-site restaurant
                      for your dining convenience. Light meal like coffee or tea
                      is served using only quality ingredients.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.selectAccordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={styles.selectaccodionsummary}
                  >
                    <Typography className={classes.heading}>
                      Can business events be hosted at Red Fox Hotel Delhi
                      Airport?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ fontSize: "13.6px" }}>
                      On-site venues and convenient event services make Red Fox
                      Hotel Delhi Airport an ideal choice for hosting events
                      such as conferences and meetings. The venue available at
                      the hotel can accommodate up to 80 people. An extensive
                      range of facilities and services including free Wi-Fi,
                      meeting stationery and audio-visual equipment is available
                      to help your business meeting or event a successful one.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className={styles.selectmapfaqs}>
                <Link to={"/map"}>
                  {" "}
                  <img
                    src="	https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg"
                    alt="faqimage"
                    className={styles.selectFaqimage}
                  />
                </Link>
                <Link to={"/map"}>
                  <button className={styles.selectFaqbutton}>
                    <h3>View Map</h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Comment />
          <div className={styles.lastmapdiv}>
            <Link to={"/map"}>
              <img src={Capture} alt="lastMap" />
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <Loading />
      )}
      {/* {map && <Map setMap={setMap}/>} */}
      {loading && <Footer />}
    </>
  );
}

export { Select };
