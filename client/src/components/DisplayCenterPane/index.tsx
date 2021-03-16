import React, { useState, useEffect } from "react";
import { DayObj, Icon, TimeBanner } from "../";

import "./DisplayCenterPane.css";

function DisplayCenterPane(props: {
    currentDay: DayObj;
    city: string;
    skiAreaName: string;
    units: string;
}) {
    const [currentTime, setCurrentTime] = useState(props.currentDay.list[0]);

    useEffect(() => {
        setCurrentTime(props.currentDay.list[0]);
    }, [props.currentDay]);

    let dailySnow = 0;
    props.currentDay.list.map((timeSlice) => {
        dailySnow += timeSlice.snow ? timeSlice.snow?.["3h"] : 0;
    });

    return (
        <>
            <div className="titlecontainer">
                <h1 className="city title">City:</h1>
                <h1 className="propCity title">{props.city}</h1>
                <h1 className="dt title">{currentTime.dt_txt.split(" ")[0]}</h1>
                <h1 className="area title">Ski Area:</h1>
                <h1 className="propArea title">{props.skiAreaName}</h1>
            </div>
            <div className="row">
                <div className="currentPane">
                    <div className="col">
                        <h1>
                            {currentTime.dt_txt.split(" ")[1].split(":")[0]}h
                            {currentTime.dt_txt.split(" ")[1].split(":")[1]}
                        </h1>
                        <Icon
                            icID={currentTime.weather[0].icon}
                            imgHeight={"100vh"}
                        />
                        <p>Conditions: {currentTime.weather[0].description}</p>
                    </div>
                    <div className="row">
                        <div className="temp">
                            <h1>
                                {Math.round(currentTime.main.temp)}&deg;
                                {props.units === "metric" ? "C" : "F"}
                            </h1>
                            <p>
                                {Math.round(currentTime.main.temp_min)}&deg;
                                {props.units === "metric" ? "C" : "F"} /{" "}
                                {Math.round(currentTime.main.temp_max)}&deg;
                                {props.units === "metric" ? "C" : "F"}
                            </p>
                        </div>
                        <div className="weather">
                            <p className="pop">
                                Precipitation:{" "}
                                {Math.round(currentTime.pop * 100)}%
                            </p>
                            <p className="hum">
                                Humidity:{" "}
                                {Math.round(currentTime.main.humidity)}%
                            </p>
                            {currentTime.visibility === 10000 ? (
                                <p className="vis">Vis: &infin; m</p>
                            ) : (
                                <p className="vis">
                                    Vis: {currentTime.visibility} m
                                </p>
                            )}
                            <p className="cloudiness">
                                Cloud: {currentTime.clouds.all}%
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <p>
                            Windspeed, direction:
                            {Math.round(currentTime.wind.speed)}
                            {props.units === "metric" ? "m/s" : "mph"},
                            {Math.round(currentTime.wind.speed)}&deg;
                        </p>
                        {currentTime.rain ? (
                            <p>
                                Rainfall for previous 3hrs:{" "}
                                {Math.round(currentTime.rain["3h"])} mm
                            </p>
                        ) : null}{" "}
                        {currentTime.snow ? (
                            <p>
                                Snowfall over previous 3hrs: ~
                                {Math.round(currentTime.snow["3h"] * 100) / 10}
                                mm
                            </p>
                        ) : null}
                    </div>
                </div>
                <div className="col">
                    <p>3 Hour Intervals</p>
                    {props.currentDay.list.map((timeSlice) => {
                        return (
                            <TimeBanner
                                onClick={() => setCurrentTime(timeSlice)}
                                time={timeSlice}
                                active={currentTime.dt === timeSlice.dt}
                                key={timeSlice.dt_txt}
                                units={props.units}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default DisplayCenterPane;
