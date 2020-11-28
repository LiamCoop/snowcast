import React/*, { useEffect, useState }*/ from 'react';
import './App.css';
import {
  Map,
  Pin,
} from './components';
import { SkiObj } from './components/interfaces/SkiObj';

//json not going to work, parses weird??
const data = require('./skiInfoReduced.json');
//integrate w/ fetching
const parsed: SkiObj[] = JSON.parse(JSON.stringify(data));
console.log(parsed[0]);

/*
<div>
  {
    parsed.map((place) => {
      return <p key={place.SkiArea.id}>{place.SkiArea.name}</p>
    })
  }
</div>
 */


function App(){
  return (
    <Map>
      <Pin />
    </Map>
  );
} 

export default App
