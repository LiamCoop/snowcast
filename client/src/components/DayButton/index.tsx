import React from 'react';

import { 
    DayObj,
    Icon,
} from '../';

import './DayButton.css';

export function DayButton(props: {day:DayObj} ) {
    let daySnow = 0;
    props.day.list.map((time) => {
       daySnow += time.snow ? time.snow?.['3h'] : 0;
    });
    return (
        <>
            <h1>{props.day.date}</h1>
            <div>
                <Icon icID={props.day.list[0].weather[0].icon} imgHeight={"70vh"}/>
            </div>
            <p>Snow: {Math.round(daySnow)}cm</p>
        </>
    );
}
