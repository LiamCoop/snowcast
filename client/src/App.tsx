import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Map,
  Pin,
  SkiObj
} from './components';
//import { GeolocateControl, Marker, Popup } from 'react-map-gl';

function App(){

  const [regions,setRegions] = useState([]);
  const [currentRegion,setCurrentRegion] = useState();
  const [showdropdown,setShowdropdown] = useState(false);
  const [showSkiObjects, setShowSkiObjects] = useState(false);
  const [currentSkiObjects,setCurrentSkiObjects] = useState([]);

  useEffect(() => {
    // Could move into it's own module, export and just call it in useEffect, how to deal with useState / setRegions call??
    const loadData = async () => {
      const response = await fetch('http://localhost:3001/regions');
      const dt = await response.json();
      setRegions(dt);
      //console.log(dt);
    } 
    loadData();
  }, []);

  useEffect(() => {
    const loadRegionPins = (async () => { 
      const response = await fetch(`http://localhost:3001/?region=${currentRegion}`);
      const data = await response.json();
      setCurrentSkiObjects(data);
      setShowSkiObjects(true);
      //console.log(data);
    });
    loadRegionPins();
  }, [currentRegion]);

    
  return (
    <>
      <button onClick={() => setShowdropdown(!showdropdown)}>Select Region</button>
      <Map>
        <div>
          {
            showdropdown ? 
              regions.map((region) => (
                <button key={region} onClick={() => {
                    setCurrentRegion(region); 
                    setShowdropdown(false);
                }}>
                  {region}
                </button>)) : null
          }
        </div>
        { 
          showSkiObjects ? 
          currentSkiObjects.map((obj: SkiObj) => {
            return <Pin latitude={Number(obj.SkiArea.geo_lat)} longitude={Number(obj.SkiArea.geo_lng)} />
          }) : null
        }
      </Map>
    </>
  );
} 

export default App
