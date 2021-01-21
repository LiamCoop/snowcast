import React from 'react';

import { 
    DayObj,
    Icon,
} from '../';

import './DayButton.css';

export function DayButton(props: {
    day:DayObj, onClick: () => void, active: boolean
}) {
    let daySnow = 0;
    props.day.list.map((time) => {
       daySnow += time.snow ? time.snow?.['3h'] : 0;
    });
    return (
        <button 
            className={props.active ? "dayButtonActive": "dayButtonInactive"}
            onClick={props.onClick}
        >
            <h1>{props.day.dateTime.split(' ')[0]}</h1>
            <Icon 
                icID={props.day.list[0].weather[0].icon} 
                imgHeight={"60vh"}
            />
            <p>Snow: {Math.round(daySnow)}cm</p>
        </button>
    );
}
