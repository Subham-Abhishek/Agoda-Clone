import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup, FullscreenControl } from 'react-map-gl';

const fullscreenControlStyle= {
  right: 10,
  top: 10
};


function Map() {
    const [lati, setLati] = useState(24.7914)
    const [long, setLong] = useState(85.0002)
    const [showPopup, togglePopup] = React.useState(false);
    const [viewport, setViewport] = useState({
        width: 1500,
        height: 950,
        latitude: lati,
        longitude: long,
        zoom: 8,
        pitch: 50
    });

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>

            <div>
                <ReactMapGL
                    mapboxApiAccessToken={"pk.eyJ1IjoiYXZpbmFzaDc1NjQiLCJhIjoiY2tzcTNyaWVyMDF2MjJ2cG5mMTZjbW1zZCJ9.WswyUJ6_O947xyEIsDI8Eg"}

                    mapStyle="mapbox://styles/mapbox/dark-v9"
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
                            <img src="https://cdn.britannica.com/21/1621-050-FFCB3339/pilgrims-ghat-Phalgu-River-Bihar-India-Gaya.jpg" width={viewport.zoom * 11} height={viewport.zoom * 11} style={{ marginRight: '10px' }} alt="marker" />
                            <h5>Gaya, city, south-central Bihar state, northeastern India.</h5>
                        </div>
                    </Popup>}

                    <FullscreenControl style={fullscreenControlStyle} />


                    <Marker latitude={lati} longitude={long} offsetTop={(-viewport.zoom * 5) / 2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" width={viewport.zoom * 7} height={viewport.zoom * 7} alt="marker" />
                    </Marker>
                </ReactMapGL>
            </div>
            <div style={{ width: "400px", padding: "20px" }}>
                <h3 style={{ color: 'rgb(2,131,223)', textAlign: "center" }}>What's Nearby</h3>
                <div style={{ backgroundColor: "rgb(243,243,243)", padding:"1px 16px", marginBottom:"10px" }}>
                    <h4>Current Selection</h4>
                </div>
                <div style={{ display: "flex" }} onClick={() => { togglePopup(!showPopup) }}>
                    <img src="https://cdn.britannica.com/21/1621-050-FFCB3339/pilgrims-ghat-Phalgu-River-Bihar-India-Gaya.jpg" width={viewport.zoom * 11} height={viewport.zoom * 11} style={{ marginRight: '20px' }} alt="marker" />
                    <h5 style={{marginTop:"9px"}}>Gaya, city, south-central Bihar state, northeastern India.<span style={{color:"orange"}}> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span></h5>
                </div>
                
            </div>
        </div >
    );
}


export { Map }