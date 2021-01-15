import React, { useState, useEffect } from 'react';
import {
    //components
    Icon,
    DayButton,
    TimeBanner,
    //interfaces
    weatherObj,
    conditionsObj,
    dayObj,
} from '../';
import './WeatherDisplay.css';

function CenterPane(props: {current: dayObj, city: string}) {
    const [currentTime, setCurrentTime] = useState(props.current.list[0]);
    let dailySnow = 0;
    props.current.list.map((timeSlice) => {
        dailySnow += timeSlice.snow ? timeSlice.snow?.['3h'] : 0;
    }); 
    return (
        <>
            <div className="row">
                <div className="currentPane">
                    <p>Conditions: {currentTime.weather[0].description}</p>
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
                                <p className="vis">
                                    Vis: {currentTime.visibility}m
                                </p>
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
                                    Rainfall for previous 3hr: 
                                    {currentTime.rain["3h"]}
                                </p> : null
                        }
                        {
                            currentTime.snow ? 
                                <p>
                                    Snowfall for previous 3hr: {currentTime.snow["3h"]}
                                    </p>:null
                        }
                    </div>
                </div>
                <div className="col">
                    {
                        props.current.list.map((timeSlice) => {
                            return <TimeBanner {...timeSlice} />
                        })
                    }
                </div>
            </div>
        </>
  );
}


export function WeatherDisplay(
    props: {weather: weatherObj, SkiAreaName: string}
) {
    //each day is a slice of 8, 3-hour sections
    const days = [
        {
            list: props.weather.list.slice(0,8),
            date: props.weather.list.slice(0,8)[0].dt_txt.split(' ')[0],
        },{ 
            list: props.weather.list.slice(8,16),
            date: props.weather.list.slice(8,16)[0].dt_txt.split(' ')[0],
        },{
            list: props.weather.list.slice(16,24),
            date: props.weather.list.slice(16,24)[0].dt_txt.split(' ')[0],
        },{ 
            list: props.weather.list.slice(24,32),
            date: props.weather.list.slice(24,32)[0].dt_txt.split(' ')[0],
        },{ 
            list: props.weather.list.slice(32,40),
            date: props.weather.list.slice(24,32)[0].dt_txt.split(' ')[0],
        },
    ];

    const [current, setCurrent] = useState(days[0]);
    //add skiAreaName display
    return (
        <div className="card">
            <div className="col">
                <CenterPane current={current} city={props.weather.city.name}/>
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
