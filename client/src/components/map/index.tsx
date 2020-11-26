import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'dotenv/config';

type Props = {
  children: React.ReactNode
};

export function Map({ children }: Props){
  const username = process.env.REACT_APP_USERNAME;
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
};

