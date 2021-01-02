import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'dotenv/config';
import { SkiObj, Button } from '../'

export function Pin(obj: SkiObj){

  //showing the popup or not.
  const [showPopup, setShowPopup] = useState(false);
  //For holding the data for a given pin
  const [weather, setWeather] = useState({});
  //Manage weather load state
  const [loadWeather, setLoadWeather] = useState(false);
  
  //when the user clicks a pin, trigger the fetching of the weather data for that pin.
  useEffect(() => {
    const loadWeather = (async () => {
      const response = await fetch("https://community-open-weather-map.p.rapidapi.com/forecast?lat="+obj.SkiArea.geo_lat+"&lon="+obj.SkiArea.geo_lng, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "eaa029e7efmshe51c46837334214p1add8ejsn9eb660b86a63",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
      });
      const dt = await response.json();
      //console.log(dt);
      setWeather(dt);
      setLoadWeather(true);
    });

    if(showPopup) loadWeather();
  }, [showPopup]);

  return (
    <>
      <Marker 
        captureClick={true} 
        latitude={Number(obj.SkiArea.geo_lat)}
        longitude={Number(obj.SkiArea.geo_lng)}
      >
        <div onClick={() => {setShowPopup(true)}}>
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
        </Popup> ) : null
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
    const loadData = (async () => {
      const response = await fetch('http://localhost:3001/regions');
      const dt = await response.json();
      setRegions(dt);
    }); 
    loadData();
  }, []);

  //should consider also going and getting resort information for all in region
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
      <div onClick={() => setShowdropdown(!showdropdown)}>
        <Button />
      </div>
      <div>
        {
          showdropdown ? 
            regions.map((region) => (
              <button key={region} onClick={() => {
                  setCurrentRegion(region); 
                  setShowdropdown(false); }}
              >
                {region}
              </button>)) : null
        }
      </div>
      {currentSkiObjects.map( (obj:SkiObj) => <Pin {...obj} /> )}
    </ReactMapGL>
  );
}
