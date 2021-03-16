import React from "react";

import { ClearSky } from "./ClearSky";
import { Clouds } from "./Clouds";
import { ShowerRain } from "./ShowerRain";
import { Rain } from "./Rain";
import { Thunder } from "./Thunder";
import { Snow } from "./Snow";
import { Mist } from "./Mist";

//import './Icons.css';

function Icon(props: { icID: string; imgHeight: string }): JSX.Element {
    const mp: Map<String, JSX.Element> = new Map([
        ["01d", ClearSky(props.imgHeight)],
        ["01n", ClearSky(props.imgHeight)],
        ["02d", Clouds(props.imgHeight)],
        ["02n", Clouds(props.imgHeight)],
        ["03d", Clouds(props.imgHeight)],
        ["03n", Clouds(props.imgHeight)],
        ["04d", Clouds(props.imgHeight)],
        ["04n", Clouds(props.imgHeight)],
        ["09d", ShowerRain(props.imgHeight)],
        ["09n", ShowerRain(props.imgHeight)],
        ["10d", Rain(props.imgHeight)],
        ["10n", Rain(props.imgHeight)],
        ["11d", Thunder(props.imgHeight)],
        ["11n", Thunder(props.imgHeight)],
        ["13d", Snow(props.imgHeight)],
        ["13n", Snow(props.imgHeight)],
        ["50d", Mist(props.imgHeight)],
        ["50n", Mist(props.imgHeight)],
    ]);
    return <>{mp.get(props.icID) !== undefined ? mp.get(props.icID) : null}</>;
}

export default Icon;
