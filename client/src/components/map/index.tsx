import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'dotenv/config';

export const Map = () => {
  const tok = process.env.REACT_APP_MAPBOX_API_TOKEN;
  const username = process.env.REACT_APP_USERNAME;
  const [viewport, setViewport] = useState({
    latitude: 45.0,
    longitude: -106.0,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport} 
      mapboxApiAccessToken={tok}
      width='100vw'
      height='100vw'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
};

