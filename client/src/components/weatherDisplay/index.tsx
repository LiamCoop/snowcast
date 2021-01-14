import { time } from 'console';
import React, { useState, useEffect } from 'react';
import {
    conditionsObj,
    Icon,
    DayButton,
    dayObj,
} from '../';
import { TimeBanner } from '../TimeBanner';
import { weatherObj } from '../ts_interfaces';
import './WeatherDisplay.css';

function CenterPane(current: dayObj){
    const [currentTime, setCurrentTime] = useState(current.list[0]);
    
    return (
        <>
            <div className="row">
                <div className="currentPane">
                    <div className="col">
                        <p>Conditions: {currentTime.weather[0].description}</p>
                        <Icon icID={currentTime.weather[0].icon} />
                    </div>
                    <div className="row">
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
                                <h1>{currentTime.main.temp}&deg;</h1>
                                <p>{currentTime.main.temp_min}&deg; / {currentTime.main.temp_max}&deg;</p>
                            </div>
                            <div id="weather">
                                <p className="pop">Precipitation: {currentTime.pop*100}%</p>
                                <p className="hum">Humidity: {currentTime.main.humidity}%</p>
                                <p className="vis">Vis: {currentTime.visibility}m</p>
                                <p className="cloudiness">Cloud: {currentTime.clouds.all}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {currentTime.wind ? <p>Windspeed,dir: {currentTime.wind.speed} m/s, {currentTime.wind.speed}&deg;</p>:null}
                        {currentTime.rain ? <p>Rainfall for previous 3hr: {currentTime.rain["3h"]}</p>:null}
                        {currentTime.snow ? <p>Snowfall for previous 3hr: {currentTime.snow["3h"]}</p>:null}
                    </div>
                </div>
                <div className="col">
                    {/*
                        current.list.map((timeSlice) => {
                            return <TimeBanner {...timeSlice} />
                        })
                    */}
                </div>
            </div>
        </>
    );
}


//fix the typing on weatherObj, can't seem to get it to work when typed as weatherObj.
//needs to be 'any' otherwise it isn't picked up as being valid.
export function WeatherDisplay(weather: any/*weatherObj*/){
    
    //total expected snowfall is sum of those *.snow elements
    //need to figure out which icon to display given weather change over the course of a day.
    //each day is a slice of 8, 3-hour sections
    const days = [
        {
            list: weather.list.slice(0,8),
            date: weather.list.slice(0,8)[0].dt_txt.split(' ')[0],
        },
        { 
            list: weather.list.slice(8,16),
            date: weather.list.slice(8,16)[0].dt_txt.split(' ')[0],
        },
        {
            list: weather.list.slice(16,24),
            date: weather.list.slice(16,24)[0].dt_txt.split(' ')[0],
        },
        { 
            list: weather.list.slice(24,32),
            date: weather.list.slice(24,32)[0].dt_txt.split(' ')[0],
        },
        { 
            list: weather.list.slice(32,40),
            date: weather.list.slice(24,32)[0].dt_txt.split(' ')[0],
        },
    ];

    const [current, setCurrent] = useState(days[0]);

    return (
        <div className="card">
            <div className="col">
                <div className="row">
                    <div className="col">
                        {weather.city.name ? <h1>City: {weather.city.name}</h1> : null}
                        <CenterPane {...current}/>
                    </div>
                </div>
                <div className="row">
                    {
                        days.map((day) => {
                            return (
                                <div 
                                    id="buttonDiv"
                                    onClick={() => setCurrent(day)} 
                                    key={day.list[0].dt}
                                > 
                                    <DayButton {...day} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
