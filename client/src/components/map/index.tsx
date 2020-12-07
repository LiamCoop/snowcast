import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'dotenv/config';
import { MarkerProps } from '../'


export function Pin(pp: MarkerProps){
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Marker 
        latitude={pp.latitude}
        longitude={pp.longitude}
        captureClick={true}
      >
        <div onClick={(event) => {setShowPopup(!showPopup)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32" 
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
      </Marker>

      { 
        showPopup ? (
          <Popup
            latitude={pp.latitude}
            longitude={pp.longitude}
            closeButton={false}
            closeOnClick={true}
            onClose={() => {setShowPopup(!showPopup)}}
            anchor="bottom"
            offsetLeft={12}
            offsetTop={12}
            sortByDepth={true}
          >
            <div>
              <h1>name: {pp.name}</h1>
            </div>
          </Popup>
        ) : null 
      }
    </>
  );
}

interface MapProps {
  children: React.ReactNode
}
//object containing children

export function Map({children}: MapProps){
  //const username = process.env.REACT_APP_USERNAME;
  const [viewport, setViewport] = useState({
    latitude: 45.0,
    longitude: -106.0,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      width='100vw'
      height='100vw'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {children}
    </ReactMapGL>
  );
}

