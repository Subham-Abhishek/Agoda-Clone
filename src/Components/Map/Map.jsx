import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup, FullscreenControl } from 'react-map-gl';
import styles from "../Select/Select.module.css"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const fullscreenControlStyle= {
  right: 10,
  top: 10
};
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function Map() {
    const classes = useStyles();
    const [lati, ] = useState(28.5245)
    const [long, ] = useState(77.1855)
    const [showPopup, togglePopup] = React.useState(false);
    const [viewport, setViewport] = useState({
        width: 900,
        height: 630,
        latitude: lati,
        longitude: long,
        zoom: 11.5,
        pitch:40
    });
    let hotelData = JSON.parse(localStorage.getItem("selectedHotels"))
    console.log("hotelData", hotelData)
    return (
        <div style={{ display: "flex", flexDirection: "row", position: "absolute", top: 0, zIndex: 1000, backgroundColor: "#fff" }}>

            <div>
                <ReactMapGL
                    mapboxApiAccessToken={"pk.eyJ1IjoiYXZpbmFzaDc1NjQiLCJhIjoiY2tzcTNyaWVyMDF2MjJ2cG5mMTZjbW1zZCJ9.WswyUJ6_O947xyEIsDI8Eg"}

                    // mapStyle="mapbox://styles/mapbox/dark-v9"
                    mapStyle='mapbox://styles/mapbox/streets-v11'
                    // mapStyle= 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
                    {...viewport}
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                    style={{
                    }} >

                    {showPopup && <Popup
                        latitude={lati}
                        longitude={long}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => togglePopup(false)}
                        anchor="top" >
                        <div style={{ display: "flex" }}>
                            <img src={ hotelData.urlchild1} width={viewport.zoom * 7} height={viewport.zoom * 7} style={{ marginRight: '10px' }} alt="marker" />
                            <h5>{ hotelData.hotel}</h5>
                        </div>
                    </Popup>}

                    <FullscreenControl style={fullscreenControlStyle} />


                    <Marker latitude={24.7914} longitude={85.0002} offsetTop={(-viewport.zoom * 3) / 2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 4} height={viewport.zoom * 4} alt="marker" />
                    </Marker>
                    <Marker latitude={28.6129} longitude={77.2295} offsetTop={(-viewport.zoom * 3) / 2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 4} height={viewport.zoom * 4} alt="marker" />
                    </Marker>
                    <Marker latitude={28.6304} longitude={77.2177} offsetTop={(-viewport.zoom * 3) / 2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 4} height={viewport.zoom * 4} alt="marker" />
                    </Marker>
                    <Marker latitude={28.5245} longitude={77.1855} offsetTop={(-viewport.zoom * 3) / 2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 4} height={viewport.zoom * 4} alt="marker" />
                    </Marker>
                    <Marker latitude={28.6507} longitude={77.2334} offsetTop={(-viewport.zoom * 3) / 2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 4} height={viewport.zoom * 4} alt="marker" />
                    </Marker>
                    <Marker latitude={28.6266} longitude={77.2091} offsetTop={(-viewport.zoom * 3) / 2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 4} height={viewport.zoom * 4} alt="marker" />
                    </Marker>
                </ReactMapGL>
            </div>
            <div style={{ width: "500px", padding: "10px" }}>
                <Link to={`/hotel/${hotelData.id}`}><CloseIcon /></Link>
                {/* <button onClick={() => setMap(false)}>X</button> */}
                <h3 style={{ color: 'rgb(2,131,223)', textAlign: "center" }}>What's Nearby</h3>
                <div className={ styles.upperdivmap}>
                    <h4><i class="fas fa-map-marker-alt" style={{color:"#5392f9", marginRight:"10px"}}> </i>Current Selection</h4>
                </div>
                <div className={ styles.mainImagemap} onClick={() => { togglePopup(!showPopup) }}>
                    <img src={ hotelData.urlchild2} width="60px" height="60px" style={{ marginRight: '20px' }} alt="marker" />
                    <h5 style={{ marginTop: "9px" }}>{ hotelData.hotel}<span style={{color:"orange"}}> <br/><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span></h5>
                </div>
                <Accordion className={styles.selectAccordion1}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={styles.selectaccodionsummary1}
                            >
                                <Typography className={classes.heading}>
                            <i className="fas fa-camera" style={{color:"orange", marginRight:"10px"}}></i> Explore
                                </Typography>
                            </AccordionSummary>
                    <AccordionDetails className={ styles.mapAccordion}>
                        <div className={styles.mapExplorediv}>
                            <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Jama-Masjid_1400.jpg" alt="jamamasjid" />
                            <div>
                                    <h3 >Jama Masjid, Delhi</h3>
                                    <h5><i className="fas fa-walking" style={{fontSize:"14px", marginRight:"5px"}} ></i> 2.5kms from the property</h5>
                                </div>
                                </div>
                        <div className={styles.mapExplorediv}>
                                     <img src="https://lp-cms-production.imgix.net/2019-06/d037496bdc8b72cf1e78bd9a08a5a823-lodi-gardens.jpg" alt="jamamasjid" />
                                <div>
                                    <h3>Lodhi Garden, Delhi</h3>
                                    <h5><i class="fas fa-walking"  style={{fontSize:"20px", marginRight:"5px"}}></i> 1.5kms from the property</h5>
                                </div>
                                </div>
                        <div className={styles.mapExplorediv}>
                                     <img src="http://abhibuscommunity.com/wp-content/uploads/2018/01/delhi-red-fort.jpg" alt="jamamasjid" />
                                <div>
                                    <h3>Red Fort, Delhi</h3>
                                    <h5><i class="fas fa-walking" style={{fontSize:"20px", marginRight:"5px"}}></i> 3.9kms from the property</h5>
                                </div>
                                </div>
                        <div className={styles.mapExplorediv}>
                                     <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/02/28/Pictures/protest-at-cp_a5e8ba4c-1c50-11e8-ad3f-dce09461b5da.jpg" alt="jamamasjid" />
                                <div>
                                    <h3>Cannaught Place, Delhi</h3>
                                    <h5><i class="fas fa-walking"  style={{fontSize:"20px", marginRight:"5px"}}></i> 4.7kms from the property</h5>
                                </div>
                                </div>
                        <div className={styles.mapExplorediv}>
                                     <img src="http://res.cloudinary.com/dwzmsvp7f/image/upload/v1571728586/olf0nixspqrqbvfefxm8.jpg" alt="jamamasjid" />
                                <div>
                                    <h3>Qutub Minar, Delhi</h3>
                                <h5><i class="fas fa-walking"  style={{fontSize:"20px", marginRight:"5px"}}></i> 5.8kms from the property</h5>
                                </div>
                                </div>
                            </AccordionDetails>
                </Accordion>
            </div>
        </div >
    );
}


export { Map }