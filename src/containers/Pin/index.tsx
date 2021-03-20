import React, { useState, useEffect, useContext } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { SkiObj, Loading, WeatherObj } from '../../components';
import WeatherDisplay from '../WeatherDisplay';
import { UnitsContext } from '../../contexts';

import './Pin.css';

function Pin(obj: SkiObj) {
  //boolean to determine whether to show the popup or not.
  const [showPopup, setShowPopup] = useState(false);
  const units = useContext(UnitsContext);
  //Contains the weather data for a given pin
  const OWMKEY = process.env.REACT_APP_OWMKEY;

  const [weather, setWeather] = useState<WeatherObj>({
    cod: '',
    cnt: 0,
    message: '',
    list: [],
    city: {
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      id: 0,
      name: '',
      population: 0,
      sunrise: 0,
      sunset: 0,
      timezone: 0,
    },
  });
  //Manage weather load state, false when loading, true when loaded
  //const [loadWeather, setLoadWeather] = useState(false);

  //when the user clicks a pin, trigger the fetching of the weather data for that pin.
  useEffect(() => {
    const loadWeatherOWM = async () => {
      console.log(units);
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/forecast?' +
          'lat=' +
          obj.SkiArea.geo_lat +
          '&lon=' +
          obj.SkiArea.geo_lng +
          '&appid=' +
          OWMKEY +
          '&units=' +
          units,
        { method: 'GET' }
      );
      const dt = await response.json();
      console.log('units, data', units, dt);
      setWeather(dt);
    };

    if (showPopup) loadWeatherOWM();
  }, [showPopup, obj.SkiArea, units]);

  return (
    <div style={{ zIndex: -1 }}>
      <Marker
        captureClick={true}
        latitude={Number(obj.SkiArea.geo_lat)}
        longitude={Number(obj.SkiArea.geo_lng)}
      >
        <div onClick={() => setShowPopup(true)}>
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
            style={{
              transform: `translate(-16px,-32px)`,
            }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
      </Marker>
      {showPopup ? (
        <Popup
          latitude={Number(obj.SkiArea.geo_lat)}
          longitude={Number(obj.SkiArea.geo_lng)}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(!showPopup)}
          anchor="bottom"
          offsetLeft={12}
          offsetTop={12}
          sortByDepth={true}
        >
          <div className="col">
            {weather.cod !== '' ? (
              <WeatherDisplay
                weather={weather}
                skiAreaName={obj.SkiArea.name}
              />
            ) : (
              <Loading />
            )}
          </div>
        </Popup>
      ) : null}
    </div>
  );
}

export default Pin;
