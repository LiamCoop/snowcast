import React from "react";
import "./banner.css";
import { ConditionsObj, Icon } from "../";

function TimeBanner(props: {
    time: ConditionsObj;
    active: boolean;
    onClick: () => void;
    units: string;
}) {
    return (
        <button
            className={props.active ? "banner Active" : "banner Inactive"}
            onClick={props.onClick}
        >
            <p>
                {props.time.dt_txt.split(" ")[1].split(":")[0]}h
                {props.time.dt_txt.split(" ")[1].split(":")[1]}
            </p>
            <Icon icID={props.time.weather[0].icon} imgHeight={"35vw"} />
            <p>
                {Math.round(
                    (props.time.main.temp_min - props.time.main.temp_max) / 2 +
                        props.time.main.temp_max
                )}{" "}
                &deg;{props.units === "metric" ? "C" : "F"}
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {
                <p>
                    Snow:{" "}
                    {props.time.snow
                        ? Math.round(props.time.snow?.["3h"] * 100) / 10
                        : "0"}
                    mm
                </p>
            }
        </button>
    );
}

export default TimeBanner;
