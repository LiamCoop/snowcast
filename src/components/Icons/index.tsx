import React from 'react';
/*
import { ClearSky } from './ClearSky';
import { Clouds } from './Clouds';
import { ShowerRain } from './ShowerRain';
import { Rain } from './Rain';
import { Thunder } from './Thunder';
import { Snow } from './Snow';
import { Mist } from './Mist';
*/

//import './Icons.css';
interface IconProps {
  icID: string;
  imgHeight: string;
}

const Icon = ({ icID, imgHeight }: IconProps): JSX.Element => (
  <img
    src={`http://openweathermap.org/img/wn/${icID}@2x.png`}
    alt="icon"
    height={imgHeight}
  />
);

/*const mp: Map<String, JSX.Element> = new Map([
    ['01d', ClearSky(imgHeight)],
    ['01n', ClearSky(imgHeight)],
    ['02d', Clouds(imgHeight)],
    ['02n', Clouds(imgHeight)],
    ['03d', Clouds(imgHeight)],
    ['03n', Clouds(imgHeight)],
    ['04d', Clouds(imgHeight)],
    ['04n', Clouds(imgHeight)],
    ['09d', ShowerRain(imgHeight)],
    ['09n', ShowerRain(imgHeight)],
    ['10d', Rain(imgHeight)],
    ['10n', Rain(imgHeight)],
    ['11d', Thunder(imgHeight)],
    ['11n', Thunder(imgHeight)],
    ['13d', Snow(imgHeight)],
    ['13n', Snow(imgHeight)],
    ['50d', Mist(imgHeight)],
    ['50n', Mist(imgHeight)],
  ]);*/
// return <>{mp.get(icID) !== undefined ? mp.get(icID) : null}</>;

export default Icon;
