import React from 'react';
import './banner.css';
import {
    ConditionsObj,
    Icon,
} from '../'

export function TimeBanner(time: ConditionsObj) {
    return (
            <span id="banner">
                <p>
                    {time.dt_txt.split(' ')[1].split(':')[0]}:
                    {time.dt_txt.split(' ')[1].split(':')[1]}
                </p>
                <Icon icID={time.weather[0].icon} imgHeight={"45vh"}/>
                <div id="tempSnow">
                    <p>
                        { Math.round(
                            (time.main.temp_min - time.main.temp_max) / 2 + 
                                time.main.temp_max
                        )
                        }&deg;C</p>
                    {
                        time.snow ? 
                            <p>{time.snow?.['3h']}cm</p> : <p>no new snow</p>
                    }
                </div>
            </span>
    );
}