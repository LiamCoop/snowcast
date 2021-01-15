import React from 'react';

import { 
    DayObj,
    Icon,
} from '../';

import './DayButton.css';

export function DayButton(props: {day:DayObj} ) {
    return (
        <>
            <h1>{props.day.date}</h1>
            <div>
                <Icon icID={props.day.list[0].weather[0].icon} imgHeight={"70vh"}/>
            </div>
        </>
    );
}
