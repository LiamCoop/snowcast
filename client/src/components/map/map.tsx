import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {Pin} from '../';
import 'dotenv/config';
interface Props {
  children: React.ReactNode
};

export function Map({children}: Props){
  const username = process.env.REACT_APP_USERNAME;
  const [viewport, setViewport] = useState({
    latitude: 45.0,
    longitude: -106.0,
    zoom: 3
  });

  //lots of markers so don't re-render
  //location data will not change (location of ski resorts) 
  return (
    <ReactMapGL
      {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
      width='100vw'
      height='100vw'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <Marker latitude={52.977947} longitude={-66.92094}>
        <Pin />
      </Marker>
    </ReactMapGL>
  );
};

