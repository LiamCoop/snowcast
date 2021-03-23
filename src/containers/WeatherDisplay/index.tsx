import React, { useState, useEffect, useContext } from 'react';
import {
  //components
  DisplayCenterPane,
  DayButton,
  Loading,
  //Typescript interfaces
  WeatherObj,
  ConditionsObj,
} from '../../components';
import { UnitsContext } from '../../contexts';
import { Card, Col, DayButtonContainer } from './style';

import './WeatherDisplay.css';

interface WeatherDisplayProps {
  latitude: string;
  longitude: string;
  skiAreaName: string;
}

const WeatherDisplay = ({
  latitude,
  longitude,
  skiAreaName,
}: WeatherDisplayProps) => {
  const [currentDay, setCurrentDay] = useState<Array<ConditionsObj>>([]);
  const weatherInit = {
    cod: '',
    cnt: 0,
    message: '',
    list: [],
    city: {
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      id: 0,
      name: '',
      population: 0,
      sunrise: 0,
      sunset: 0,
      timezone: 0,
    },
  };
  const [weather, setWeather] = useState<WeatherObj>(weatherInit);
  const units = useContext(UnitsContext);
  console.log(weather);

  useEffect(() => {
    const loadWeatherOWM = async () => {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/forecast?' +
          'lat=' +
          latitude +
          '&lon=' +
          longitude +
          '&appid=' +
          process.env.REACT_APP_OWMKEY +
          '&units=' +
          units
      );
      const dt = await response.json();
      setWeather(dt);
      setCurrentDay(dt.list.slice(0, 8));
    };
    loadWeatherOWM();
  }, [units]);

  return (
    <Card>
      {currentDay[0] !== undefined ? (
        <Col>
          <DisplayCenterPane
            currentDay={currentDay}
            city={weather.city.name}
            skiAreaName={skiAreaName}
            units={units}
          />
          <DayButtonContainer>
            <DayButton
              active={currentDay[0].dt_txt === weather.list[0].dt_txt}
              day={weather.list.slice(0, 8)}
              onClick={() => setCurrentDay(weather.list.slice(0, 8))}
              units={units}
            />
            <DayButton
              active={currentDay[0].dt_txt === weather.list[8].dt_txt}
              day={weather.list.slice(8, 16)}
              onClick={() => setCurrentDay(weather.list.slice(8, 16))}
              units={units}
            />
            <DayButton
              active={currentDay[0].dt_txt === weather.list[16].dt_txt}
              day={weather.list.slice(16, 24)}
              onClick={() => setCurrentDay(weather.list.slice(16, 24))}
              units={units}
            />
            <DayButton
              active={currentDay[0].dt_txt === weather.list[24].dt_txt}
              day={weather.list.slice(24, 32)}
              onClick={() => setCurrentDay(weather.list.slice(24, 32))}
              units={units}
            />
            <DayButton
              active={currentDay[0].dt_txt === weather.list[32].dt_txt}
              day={weather.list.slice(32)}
              onClick={() => setCurrentDay(weather.list.slice(32, 40))}
              units={units}
            />
          </DayButtonContainer>
        </Col>
      ) : (
        <Loading />
      )}
    </Card>
  );
};
/*
  <div className="linkfmt">
      <p>Location data courtesy of:&nbsp;</p>
      <a className="link" href="skimap.org">
          SkiMap.org
      </a>
  </div>
*/
export default WeatherDisplay;
