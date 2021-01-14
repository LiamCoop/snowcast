import React from 'react';
import { 
    conditionsObj,
    Icon,
    dayObj,
} from '../';
import './DayButton.css';

export function DayButton(day:dayObj) {
    return (
        <button className="col">
            <h1>{day.date}</h1>
            <div>
                <Icon icID={day.list[0].weather[0].icon} />
            </div>
        </button>
    );
}