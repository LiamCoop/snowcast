import React, { useState, useEffect, useContext } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { SkiObj, Loading, WeatherObj } from '../../components';
import WeatherDisplay from '../WeatherDisplay';
import { UnitsContext } from '../../contexts';

import './Pin.css';

const Pin = (obj: SkiObj) => {
  const [showPopup, setShowPopup] = useState(false);
  // const units = useContext(UnitsContext);
  // const OWMKEY = process.env.REACT_APP_OWMKEY;

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
          <WeatherDisplay
            latitude={String(obj.SkiArea.geo_lat)}
            longitude={String(obj.SkiArea.geo_lng)}
            skiAreaName={obj.SkiArea.name}
          />
        </Popup>
      ) : null}
    </div>
  );
};

export default Pin;
