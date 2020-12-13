import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'dotenv/config';
import { SkiObj } from '../'

export function Pin(obj: SkiObj){

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Marker 
        captureClick={true} 
        latitude={Number(obj.SkiArea.geo_lat)}
        longitude={Number(obj.SkiArea.geo_lng)}
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
            latitude={Number(obj.SkiArea.geo_lat)}
            longitude={Number(obj.SkiArea.geo_lng)}
            closeButton={false}
            closeOnClick={true}
            onClose={() => {setShowPopup(!showPopup)}}
            anchor="bottom"
            offsetLeft={12}
            offsetTop={12}
            sortByDepth={true}
          >
            <div>
              <p>{obj.SkiArea.name}</p>
            </div>
          </Popup>
        ) : null 
      }
    </>
  );
}

export function Map(){

  const [showdropdown, setShowdropdown] = useState(false);
  const [regions, setRegions] = useState([]);
  const [currentRegion, setCurrentRegion] = useState();
  const [currentSkiObjects, setCurrentSkiObjects] = useState([]);

  const [viewport, setViewport] = useState({
    latitude: 45.0,
    longitude: -106.0,
    zoom: 3
  });

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('http://localhost:3001/regions');
      const dt = await response.json();
      setRegions(dt);
    } 
    loadData();
  }, []);

  useEffect(() => {
    const loadRegionPins = (async () => { 
      const response = await fetch(`http://localhost:3001/?region=${currentRegion}`);
      const data = await response.json();
      setCurrentSkiObjects(data);
    });
    loadRegionPins();
  }, [currentRegion]);

  return (
    <ReactMapGL
      {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      width='100vw'
      height='100vw'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <button onClick={() => {setShowdropdown(!showdropdown)}} >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="feather feather-arrow-down-circle">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="8 12 12 16 16 12"></polyline>
            <line x1="12" y1="8" x2="12" y2="16"></line>
        </svg>
      </button>
      <div>
        {
          showdropdown ? 
            regions.map((region) => (
              <button key={region} onClick={() => {
                  setCurrentRegion(region); 
                  setShowdropdown(false);
              }}>
                {region}
              </button>)) : null
        }
      </div>
      {currentSkiObjects.map((obj:SkiObj) => <Pin {...obj} />)}
    </ReactMapGL>
  );
}
