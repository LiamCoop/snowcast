import React, { useState } from 'react'
import {
    //components
    DisplayCenterPane,
    DayButton,
    //Typescript interfaces
    WeatherObj,
} from '../../components'
import './WeatherDisplay.css'

export function WeatherDisplay(props: {
    weather: WeatherObj
    skiAreaName: string
}) {
    //each day is 8, 3-hour sections
    const days = [
        {
            list: props.weather.list.slice(0, 8),
            dateTime: props.weather.list.slice(0, 8)[0].dt_txt,
        },
        {
            list: props.weather.list.slice(8, 16),
            dateTime: props.weather.list.slice(8, 16)[0].dt_txt,
        },
        {
            list: props.weather.list.slice(16, 24),
            dateTime: props.weather.list.slice(16, 24)[0].dt_txt,
        },
        {
            list: props.weather.list.slice(24, 32),
            dateTime: props.weather.list.slice(24, 32)[0].dt_txt,
        },
        {
            list: props.weather.list.slice(32, 40),
            dateTime: props.weather.list.slice(32, 40)[0].dt_txt,
        },
    ]

    const [currentDay, setCurrentDay] = useState(days[0])

    return (
        <div className="card">
            <div className="col">
                <DisplayCenterPane
                    currentDay={currentDay}
                    city={props.weather.city.name}
                    skiAreaName={props.skiAreaName}
                />
                <div id="DayButtonDiv">
                    {days.map((day) => {
                        return (
                            <DayButton
                                active={
                                    currentDay.dateTime === day.list[0].dt_txt
                                }
                                day={day}
                                onClick={() => setCurrentDay(day)}
                                key={day.list[0].dt_txt}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
