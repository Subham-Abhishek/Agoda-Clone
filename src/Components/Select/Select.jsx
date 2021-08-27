
import { Link } from "react-router-dom"
import styles from "./Select.module.css";
import { Comment } from '../Comment/Comments';
import { useEffect } from "react";
import { SelectNavbar } from "./Navbar";
import React,{ useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function Select() {
    const [navbar, setNavbar] = useState(false)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    window.onscroll = () => {

        if (window.scrollY >= 600) {
            setNavbar(true)
        }
        else {
            setNavbar(false) 
        }
    }
    
    return <>
        { navbar &&  <div className={ styles.navbarmaindiv}>
            <button>Rooms</button>
            <button onClick={() => { window.scrollTo(0, 1700);}}>Facilities</button>
            <button>Reviews</button>
            <button>Childrens and extra beds</button>
            <button onClick={() => { window.scrollTo(0, 0);}}> Top <i className="fas fa-arrow-up" ></i> </button>
        </div>}
        <div className={styles.selectMainDiv}>
            <div className={ styles.upperdiv}>
                <div className={styles.selectUpperDiv}>
                    <div className={styles.selectUpperDivImage}>
                        <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/46069253.jpg?k=3b4c54b4792df6aced8f9040cb373b7fd59c59fcfba7218f6d9fdcb39265906f&o=" alt="image1" className={styles.selectBigimage}/>
                        <div className={styles.selectUpperDivdiv}>
                            <div>
                                <p>from</p>
                                <p>Rs. <span>2,879</span></p>
                            </div>
                            <div>
                                <h3>54%</h3>
                                <h5>Discount</h5>
                            </div>
                        </div>
                        <h4 className={ styles.selectupperh1}>
                            "Great place to live."<br /><br/>
                            <p>Sandeep - January 5 2020</p>
                        </h4>
                        <div className={styles.selectUpperDivImage2}>
                            <img src="https://pix8.agoda.net/hotelImages/400860/-1/3cfdcb434113aab012d5b85bbe77c4e3.jpg?s=1024x768" alt="images" />
                            <div>
                                <img src="https://pix8.agoda.net/hotelImages/5061882/0/766190091e57e969173415511421bf31.jpg?s=1024x768" alt="images"/>
                                <img src="	https://pix8.agoda.net/hotelImages/5061882/0/85fb9b7a13482a2ec82d01967afb66b8.jpg?s=1024x768" alt="images" />
                                <h5 className={styles.selectseeallphotos}>SEE ALL PHOTOS</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.selectHoteldetails}>
                        <div className={styles.selectHotelbutton}>
                            <button>Best Seller</button>
                            <button>free wi-fi</button>
                            <button>Genius</button>
                        </div>
                        <h1>Red Fox Hotel Delhi Airport
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>   
                        </h1>
                        <p>Hospitality District, Indira Gandhi Int'l Airport, New Delhi and NCR, India, 110037</p>
                    </div>
                    <div className={styles.selectHotelmeans}>
                        <div>
                            <i className="fas fa-subway"></i>
                            <i className="fas fa-car"></i>
                            <i className="fas fa-wifi"></i>
                            <i className="fas fa-map-marker-alt"></i>
                            <i className="fas fa-brush"></i>
                        </div>
                        <div style={{display:"flex"}}>
                            <p>320 meters to public transportation </p>
                            <p>Airport transport</p>
                            <p>Located in heart of New Delhi and NCR </p>
                            <p>Free Wi-Fi in all rooms!</p>
                            <p>Daily housekeeping</p>
                        </div>
                    </div>
                </div>

                <div className={ styles.selectrating}>
                    <div className={ styles.selectratingdiv1}>
                        <div className={styles.selectRatingDiv}>
                            <div className={styles.selectRatingDiv1}>
                                <h2>7.7</h2>
                            </div>
                            <h3>Very Good</h3>
                            <br/>
                            <h5>/(1,515 reviews)</h5>
                        </div>
                        <div className={styles.selectRatingdivs}>
                            <p>Housekeeping</p>
                        </div>
                        <div className={ styles.selectRatingdivs}>
                            <p>Breakfast</p>
                        </div>
                        <div className={ styles.selectRatingdivs}>
                            <p>Food & Dining</p>
                        </div>
                    </div>
                    <div className={styles.mapImage}>
                        <Link to={"/map"}><img src="https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg" alt="map"/></Link>
                    </div>
                </div>
            </div>

            <div className={styles.selectpopulardates}>
                <div className={styles.selectpopulardatesimg}>
                    <img src="	https://cdn6.agoda.net/images/MIN-17619/yellow-icon.svg" alt="popularImage" />
                    <div className={ styles.selectpopulardatesimgdiv}>
                        <p className={ styles.selectpopulardatesimgdivspan1}>Your dates are popular among travelers</p>
                        <p className={ styles.selectpopulardatesimgdivspan2}>Users are booking a place in<span className={ styles.selectpopulardatesimgdivspan1}> New Delhi and NCR </span>every 1 minutes on Agoda.com</p>
                    </div>
                </div>
            </div>

            <h2 className={styles.selectsyr}>Select your room</h2>
            <hr className={styles.commenthr} />
            <h4>Take a look at these facilities:<span className={styles.selectinstantconfirm}><i className="far fa-check-circle"></i>Instant confirmation</span></h4>
            <div className={styles.selectfitness}>
                <span aria-describedby={id} type="button" onClick={handleClick}>
                    <i className="fas fa-dumbbell"></i> Fitnees center
                </span>
                 <Popper id={id} open={open} anchorEl={anchorEl}>
                    <div className={classes.paper}>
                        <img src="https://pix8.agoda.net/hotelImages/400860/-1/3cfdcb434113aab012d5b85bbe77c4e3.jpg?s=1024x768" alt="fitness" style={{width:"300px", height:"200px"}}/>
                    </div>
                </Popper>
                <span><i className="fas fa-utensils"></i> Resturants</span>
            </div>
            <div className={ styles.selectsqr}>
                <span className={styles.selectsqrt}>Standard Queen Room</span><br/>
                <span className={styles.selectsqrt1}>Last Booked 6 Hours Ago</span>
                <div className={ styles.selectinnerdiv}>
                    <div  className={ styles.selectinnerdiv1}>
                        <img src="https://pix8.agoda.net/hotelImages/400860/-1/3cfdcb434113aab012d5b85bbe77c4e3.jpg?s=1024x768" alt="standardqueen" />
                        <p className={ styles.selectinnerdivp1}>Room photos and details</p>
                        <p style={{ color:"rgb(133, 193, 80)" }}><i className="fas fa-wifi"> </i> Free Wi-Fi</p>
                        <p> <i className="fas fa-bed"></i> 1 Queen bed</p>
                        <p> <i className="fas fa-restroom"></i> Room size: 19 m²/205 ft²</p>
                        <p><i className="fas fa-bath"></i> Shower</p>
                    </div>
                    <div className={styles.selectinnerdiv2}>
                        <div className={styles.selectinnerdivs}>
                            Benefits
                        </div>
                        <span>Your price includes:</span>
                        <p className={ styles.selectsqrp}><i className="fas fa-check"></i> Pay nothing until August 31, 2021</p>
                        <p className={ styles.selectsqrp}><i className="fas fa-check"></i> Free Wi-fi</p>
                        <p className={ styles.selectsqrp}><i className="fas fa-check"></i>Free cancellation before September 2, 2021</p>
                        <p className={ styles.selectsqrp}><i className="fas fa-check"></i>Free cancellation before August 31, 2021</p>
                    </div>
                    <div className={ styles.selectinnerdiv3}>
                        <div className={styles.selectinnerdivs}>
                            Sleeps
                        </div>
                        <i className="fas fa-restroom"></i>
                    </div>
                    <div className={ styles.selectinnerdiv4}>
                        <div className={styles.selectinnerdivs}>
                            Price per night
                        </div>
                    </div>
                    <div className={ styles.selectinnerdiv5}>
                        <div className={styles.selectinnerdivs}>
                            Rooms
                        </div>
                        <select className={ styles.selectsquare}>
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
                    <div className={ styles.selectinnerdiv6}>
                        <div className={styles.selectinnerdivs}>
                            Most Booked
                        </div>
                        <button className={styles.selectinnerbutton}>Reserve</button>
                        <div className={ styles.selectreservediv}>
                            <h5>No Payment Today</h5>
                        </div>
                        <h5 style={{ color:"rgb(54,182,139)", textAlign:"center" }}>Limited Availaibility</h5>
                    </div>
                </div>
            </div>


            <h1>Frequently asked questions</h1>
        </div>
        <Comment/>
    </>
}

export {Select}