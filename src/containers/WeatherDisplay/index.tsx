import React, { useState, useContext } from 'react';
import {
  //components
  DisplayCenterPane,
  DayButton,
  //Typescript interfaces
  WeatherObj,
} from '../../components';
import { UnitsContext } from '../../contexts';
import { Card, Col, DayButtonContainer } from './style';

import './WeatherDisplay.css';

interface WeatherDisplayProps {
  weather: WeatherObj;
  skiAreaName: string;
}

const WeatherDisplay = ({ weather, skiAreaName }: WeatherDisplayProps) => {
  const [currentDay, setCurrentDay] = useState(weather.list.slice(0, 8));
  const units = useContext(UnitsContext);

  return (
    <Card>
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
        {/*
          <div className="linkfmt">
              <p>Location data courtesy of:&nbsp;</p>
              <a className="link" href="skimap.org">
                  SkiMap.org
              </a>
          </div>
        */}
      </Col>
    </Card>
  );
};

export default WeatherDisplay;
