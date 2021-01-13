import React, { useState, useEffect } from 'react';
import {
    conditionsObj,
    Icon,
} from '..';
//import { skiObj } from '../ts_interfaces';
import './WeatherDisplay.css';

function CenterPane(current:conditionsObj){
    return (
        <div className="header">
            <div className="col">
                <p>Conditions: {current.weather[0].description}</p>
                <Icon icID={current.weather[0].icon} />
            </div>
            <div className="row">
                <div id="temp">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" 
                        viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-cloud-snow"
                    >
                        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                        <line x1="8" y1="16" x2="8.01" y2="16"></line>
                        <line x1="8" y1="20" x2="8.01" y2="20"></line>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        <line x1="12" y1="22" x2="12.01" y2="22"></line>
                        <line x1="16" y1="16" x2="16.01" y2="16"></line>
                        <line x1="16" y1="20" x2="16.01" y2="20"></line>
                    </svg>
                    <h1>{current.main.temp}&deg;</h1>
                    <p>{current.main.temp_min}&deg; / {current.main.temp_max}&deg;</p>
                </div>
                <div id="weather">
                    <p className="pop">Precipitation: {current.pop*100}%</p>
                    <p className="hum">Humidity: {current.main.humidity}%</p>
                    <p className="vis">Vis: {current.visibility}m</p>
                    <p className="cloudiness">Cloud: {current.clouds.all}%</p>
                </div>
            </div>
            <div className="col">
                {current.wind ? <p>Windspeed,dir: {current.wind.speed} m/s, {current.wind.speed}&deg;</p>:null}
                {current.rain ? <p>Rainfall for previous 3hr: {current.rain["3h"]}</p>:null}
                {current.snow ? <p>Snowfall for previous 3hr: {current.snow["3h"]}</p>:null}
            </div>
        </div>
    );
}

//fix the typing on weatherObj, can't seem to get it to work when statically declared as weatherObj.
//need to change to :any otherwise it isn't picked up as valid.
export function WeatherDisplay(weather: any){
    //split the 40 weather.list[i] elements into days
    //each day is an array slice of 8, 3-hour sections
    //total expected snowfall is sum of those *.snow elements
    const [current, setCurrent] = useState(weather.list[0]);
    /*
    const day0 = weather.list.slice(0,8);
    const day1 = weather.list.slice(8,16);
    const day2 = weather.list.slice(16,24);
    const day3 = weather.list.slice(16,24);
    const day4 = weather.list.slice(24,32);
    const day5 = weather.list.slice(32,40);
    */

    return (
        <div className="card">
            <div className="col">
                <div className="col">
                    {weather.city.name ? <h1>City: {weather.city.name}</h1> : null}
                    <CenterPane {...current}/>
                </div>
                <div className="row">
                    <h1>test</h1>
                </div>
            </div>
        </div>
    );
}
