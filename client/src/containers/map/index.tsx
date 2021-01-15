import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import 'dotenv/config';
import {
  SkiObj,
  RegionsButton,
} from '../../components';
import { Pin } from '../pin';
import './Map.css';

const skiInfo = require('../../SkiInfo.json');

export function Map() {
  const [showdropdown, setShowdropdown] = useState(false);
  const [regions, setRegions] = useState([]);
  const [currentRegion, setCurrentRegion] = useState();
  const [currentSkiObjects, setCurrentSkiObjects] = useState([]);

  const [viewport, setViewport] = useState({
    latitude: 45.0,
    longitude: -106.0,
    zoom: 3,
  });

  // display the names of all regions containing ski locations
  // occurs on first page load
  useEffect(() => {
    setRegions(Array.from(new Set(skiInfo.map((obj:SkiObj) => (
        (typeof obj.Region[0] !== 'undefined') ? obj.Region[0].name : 'null'
      )
      ))));
  }, []);

  // filter skiInfo down to only the one in the selected region (currentRegion)
  // occurs on currentRegion update
  useEffect(() => {
    setCurrentSkiObjects(skiInfo.filter((obj:SkiObj) => {
      if (
        typeof(obj.Region[0]) === 'undefined' || 
          obj.SkiArea.geo_lat == null || 
          obj.SkiArea.geo_lng == null
      ) return false; 
      return (obj.Region[0].name === currentRegion);
    }));
  }, [currentRegion]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      width="100vw"
      height="100vw"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <div className="btn" onClick={() => setShowdropdown(!showdropdown)} >
        <RegionsButton />
      </div>
      <div>
        {
          showdropdown
            ? regions.map((region) => (
              <button
                className="button"
                key={region}
                onClick={() => {
                  setCurrentRegion(region);
                  setShowdropdown(false);
                }}
              >
                {region}
              </button>
            )) : null
        }
      </div>
      {
        currentSkiObjects.map((obj: SkiObj) => 
          <Pin key={obj.SkiArea.name} {...obj} />
        )
      }
    </ReactMapGL>
  );
}
