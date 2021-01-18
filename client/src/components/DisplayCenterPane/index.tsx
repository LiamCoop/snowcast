import React, { useState, useEffect } from 'react';
import {
  DayObj,
  Icon,
  TimeBanner,
} from '../'

import './DisplayCenterPane.css';

export function DisplayCenterPane(
    props: { current: DayObj, city: string, skiAreaName: string }) {

    const [currentTime, setCurrentTime] = useState(props.current.list[0]);

    useEffect(() => {
        setCurrentTime(props.current.list[0])
    },[props.current]);

    let dailySnow = 0;
    props.current.list.map((timeSlice) => {
        dailySnow += timeSlice.snow ? timeSlice.snow?.['3h'] : 0;
    }); 
    return (
        <>
            <h1>{props.current.date}</h1>
            <div className="row">
                <div className="currentPane">
                    <div className="row">
                        <h1>City: {props.city}</h1>
                        <h1>Ski Area: {props.skiAreaName}</h1>
                    </div>
                    <div className="row">
                        <p>Conditions: {currentTime.weather[0].description}</p>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div id="temp">
                                <Icon 
                                    icID={currentTime.weather[0].icon} 
                                    imgHeight={"80vh"} 
                                />
                                <h1>{Math.round(currentTime.main.temp)}&deg;</h1>
                                <p>
                                    {Math.round(currentTime.main.temp_min)}&deg; / 
                                    {Math.round(currentTime.main.temp_max)}&deg;
                                </p>
                            </div>
                            <div id="weather">
                                <p className="pop">
                                    Precipitation: {currentTime.pop*100}%
                                </p>
                                <p className="hum">
                                    Humidity: {currentTime.main.humidity}%
                                </p>
                                {
                                    currentTime.visibility === 10000 ? 
                                        <p className="vis">
                                            Vis: &infin; m
                                        </p> : <p className="vis">
                                            Vis: {currentTime.visibility === 10000 ? 
                                                currentTime.visibility : '&infin;'}m
                                    </p>
                                }
                                <p className="cloudiness">
                                    Cloud: {currentTime.clouds.all}%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {
                            currentTime.wind ? 
                                <p>
                                    Windspeed,dir: {currentTime.wind.speed} m/s, 
                                    {currentTime.wind.speed}&deg;
                                </p> : null
                        }
                        {
                            currentTime.rain ? 
                                <p>
                                    Rainfall for previous 3hr: {currentTime.rain["3h"]}
                                </p> : null
                        }
                        {
                            currentTime.snow ? 
                                <p>
                                    Snowfall for previous 3hr: {currentTime.snow["3h"]}
                                </p> : null
                        }
                    </div>
                </div>
                <div className="col">
                    {
                        props.current.list.map((timeSlice) => {
                            return (
                                <button id="bannerbtn" onClick={() => {setCurrentTime(timeSlice)}}>
                                    <TimeBanner {...timeSlice} />
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </>
  );
}
