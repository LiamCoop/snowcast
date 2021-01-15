import React from 'react';
import { 
    DayObj,
    Icon,
} from '../';
import './DayButton.css';

export function DayButton(day:DayObj) {
    return (
        <button className="col">
            <h1>{day.date}</h1>
            <div>
                <Icon icID={day.list[0].weather[0].icon} imgHeight={"70vh"}/>
            </div>
        </button>
    );
}