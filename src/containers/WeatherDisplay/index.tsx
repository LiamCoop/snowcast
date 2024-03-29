import React, { useState, useEffect, useContext } from 'react';
import { DayButton, DisplayCenterPane, Loading } from '../../components';
import { ConditionsObj, WeatherObj } from '../../components/types';
import { UnitsContext } from '../../contexts';
import { Col, DayButtonContainer } from './style';

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
  const [currentDay, setCurrentDay] = useState<ConditionsObj[]>([]);
  const [days, setDays] = useState<Array<ConditionsObj[]>>([]);
  const [weather, setWeather] = useState<WeatherObj>({
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
  });
  const units = useContext(UnitsContext);

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
      const dt: WeatherObj = await response.json();
      setWeather(dt);
      // sets currentDay to all 3hr slots
      // matching date provided
      setCurrentDay(
        dt.list.filter(
          (ob) =>
            ob.dt_txt.split(' ')[0].split('-')[2] ===
            dt.list[0].dt_txt.split(' ')[0].split('-')[2]
        )
      );

      // gets all dates (either 5 or 6 days depending
      // on time of day when fetch happens)
      const dateList = Array.from(
        new Set(dt.list.map((ob) => ob.dt_txt.split(' ')[0].split('-')[2]))
      );
      const dayslist = dateList.map((date) =>
        dt.list.filter((ob) => ob.dt_txt.split(' ')[0].split('-')[2] === date)
      );
      setDays(dayslist);
      setCurrentDay(dayslist[0]);
    };
    loadWeatherOWM();
  }, [units]);

  return (
    <>
      {currentDay.length !== 0 ? (
        <Col>
          <DisplayCenterPane
            currentDay={currentDay}
            city={weather.city.name}
            skiAreaName={skiAreaName}
            units={units}
            key={currentDay[0].dt_txt}
          />
          <DayButtonContainer>
            {days.map((day) => (
              <DayButton
                day={day}
                onClick={() => setCurrentDay(day)}
                active={
                  day[0].dt_txt.split(' ')[0].split('-')[2] ===
                  currentDay[0].dt_txt.split(' ')[0].split('-')[2]
                }
                units={units}
              />
            ))}
          </DayButtonContainer>
        </Col>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default WeatherDisplay;
