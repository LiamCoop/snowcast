import React, { useState, useEffect } from 'react';
import {
    //components
    DisplayCenterPane,
    DayButton,
    //interfaces
    WeatherObj,
    ConditionsObj,
    DayObj,
} from '../../components';
import './WeatherDisplay.css';



export function WeatherDisplay(
    props: { weather: WeatherObj, skiAreaName: string }
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
                <DisplayCenterPane 
                    current={current} 
                    city={props.weather.city.name}
                    skiAreaName={props.skiAreaName}
                />
                <div id="DayButtonDiv">
                    {
                        days.map((day) => {
                            return (
                                <button 
                                    id="dayButton"
                                    onClick={() => setCurrent(day)} 
                                    key={day.list[0].dt}
                                > 
                                    <DayButton day={day} />
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
