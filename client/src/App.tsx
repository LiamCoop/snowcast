import React/*, { useEffect, useState }*/ from 'react';
import './App.css';
import {
  Map,
  Pin,
} from './components';
import { MarkerProps } from './components/map';
import { SkiObj} from './components/interfaces/SkiObj';

const data = require('./skiInfoReduced.json');
const parsed: SkiObj[] = JSON.parse(JSON.stringify(data));

function PlotPins(){
  return parsed.map((skiobj) => {
    return (
      <Pin 
        {...{
          latitude: Number(skiobj.SkiArea.geo_lat),
          longitude: Number(skiobj.SkiArea.geo_lng)
        } as MarkerProps }
      />
    );
  });
}

function App(){
  return (
    <Map>
      {PlotPins()}  
    </Map>
  );
} 

export default App
