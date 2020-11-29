import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'dotenv/config';

export interface MarkerProps {
  latitude: number; 
  longitude: number; 
  /*offsetLeft?: number;
  offsetTop?: number;
  draggable?: boolean;
  //onDragStart?: () => ;
  //onDrag?: () =>  ;
  //onDragEnd?: () => ;
  captureScroll?: boolean;
  captureDrag?: boolean;
  */
  name: string;
  //captureClick?: boolean;
  //captureDoubleClick?: boolean;
}


export function Pin(pp: MarkerProps){

  return (
    <Marker 
      latitude={pp.latitude}
      longitude={pp.longitude}
      captureClick={true}
    >
      <div>
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
  );
};

interface MapProps {
  children: React.ReactNode
};

export function Map({children}: MapProps){
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

