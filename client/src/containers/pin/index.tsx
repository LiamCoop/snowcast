import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-map-gl';

import { 
  SkiObj, 
  Loading, 
  WeatherObj, 
} from '../../components';
import { WeatherDisplay } from '../weatherDisplay';

import './Pin.css';
const wthr = require('../../weather.json');

export function Pin(obj: SkiObj) {

  //boolean to determine whether to show the popup or not.
  const [showPopup, setShowPopup] = useState(false);
  //Contains the weather data for a given pin
  const [weather, setWeather] = useState<WeatherObj> ({} as WeatherObj);
  //Manage weather load state, false when loading, true when loaded
  const [loadWeather, setLoadWeather] = useState(false);
  
  //when the user clicks a pin, trigger the fetching of the weather data for that pin.
  useEffect(() => {
    const loadWeather = (async () => {
      const response = await fetch(
        "https://community-open-weather-map.p.rapidapi.com/forecast?lat=" + 
        obj.SkiArea.geo_lat + "&lon=" + 
        obj.SkiArea.geo_lng + "&units=metric", {
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

    if(showPopup){
      //loadWeather();
      setWeather(wthr);
      setLoadWeather(true);
    }
  }, [showPopup, obj.SkiArea]);

  return (
    <div style={{zIndex:-1}}>
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
            closeButton={true}
            closeOnClick={false}
            onClose={() => {setShowPopup(!showPopup)}}
            anchor="bottom"
            offsetLeft={12}
            offsetTop={12}
            sortByDepth={true}
          >
            <div className="col">
              { 
                loadWeather ? 
                  <WeatherDisplay 
                    weather={weather} 
                    skiAreaName={obj.SkiArea.name}
                  /> : <Loading />
              }
            </div>
          </Popup> ) : null
      }
    </div>
  );
}
