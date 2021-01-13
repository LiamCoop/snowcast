import React from 'react';
//import './Icons.css';

function ClearSky() {
  return (
    <img
      src="http://openweathermap.org/img/wn/01d@2x.png"
      alt="ClearSky"
    />
  );
}

function Clouds() {
  return (
    <img
      src="http://openweathermap.org/img/wn/02d@2x.png"
      alt="Clouds"
    />
  );
}

function ShowerRain() {
  return (
    <img
      src="http://openweathermap.org/img/wn/09d@2x.png"
      alt="ShowerRain"
    />
  );
}

function Rain() {
  return (
    <img
      src="http://openweathermap.org/img/wn/10d@2x.png"
      alt="Rain"
    />
  );
}

function Thunder() {
  return (
    <img
      src="http://openweathermap.org/img/wn/11d@2x.png"
      alt="Thunder"
    />
  );
}

/* <h1>Snow</h1> */
function Snow() {
  return (
    <img
      src="http://openweathermap.org/img/wn/13d@2x.png"
      alt="Snow"
    />
  );
}

function Mist() {
  return (
    <img
      src="http://openweathermap.org/img/wn/50d@2x.png"
      alt="Mist"
    />
  );
}

export function Icon(props: {icID:string}): JSX.Element {
  const mp:Map<String, JSX.Element> = new Map([
    ['01d', ClearSky()],
    ['01n', ClearSky()],
    ['02d', Clouds()],
    ['02n', Clouds()],
    ['03d', Clouds()],
    ['03n', Clouds()],
    ['04d', Clouds()],
    ['04n', Clouds()],
    ['09d', ShowerRain()],
    ['09n', ShowerRain()],
    ['10d', Rain()],
    ['10n', Rain()],
    ['11d', Thunder()],
    ['11n', Thunder()],
    ['13d', Snow()],
    ['13n', Snow()],
    ['50d', Mist()],
    ['50n', Mist()],
  ]);
  return (<>{mp.get(props.icID) !== undefined ? mp.get(props.icID) : null}</>);
}
